import { FunctionaryRefreshToken } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import IHashProvider from "@shared/container/providers/HashProvider/models/IHashProvider";
import IGenerateFunctionariesTokenProvider from "../providers/GenerateFunctionariesTokenProvider/models/IGenerateFunctionariesTokenProvider";
import IFunctionariesRefreshTokenRepository from "../repositories/IFunctionariesRefreshTokenRepository";
import IFunctionariesRepository from "../repositories/IFunctionariesRepository";

interface IAuthenticateFunctionaryRequest {
  email: string;
  password: string;
}

interface IAuthenticateFunctionaryResponse {
  token: string;
  refreshToken: FunctionaryRefreshToken;
}

@injectable()
class AuthenticateFunctionaryService {
  constructor(
    @inject("FunctionariesRepository")
    private functionariesRepository: IFunctionariesRepository,

    @inject("GenerateFunctionariesTokenProvider")
    private tokenProvider: IGenerateFunctionariesTokenProvider,

    @inject("FunctionariesRefreshTokenRepository")
    private refreshTokenRepository: IFunctionariesRefreshTokenRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    email,
    password,
  }: IAuthenticateFunctionaryRequest): Promise<IAuthenticateFunctionaryResponse> {
    const user = await this.functionariesRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Credenciais incorretas!", 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new AppError("Credenciais incorretas!", 401);
    }

    const token = await this.tokenProvider.execute(user.id);

    await this.refreshTokenRepository.delete(user.id);

    const refreshToken = await this.refreshTokenRepository.create(user.id);

    return {
      token,
      refreshToken,
    };
  }
}

export default AuthenticateFunctionaryService;
