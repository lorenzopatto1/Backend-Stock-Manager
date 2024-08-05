import { Matrix, MatrixRefreshToken } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import IMatrixesRepository from "../repositories/IMatrixesRepository";

import AppError from "@shared/errors/AppError";

import { sign } from "jsonwebtoken";

import authConfig from "@config/auth";
import IHashProvider from "@shared/container/providers/HashProvider/models/IHashProvider";
import IGenerateMatrixesTokenProvider from "../providers/GenerateMatrixesTokenProvider/models/IGenerateMatrixesTokenProvider";
import IMatrixesRefreshTokenRepository from "@modules/matrixes/repositories/IMatrixesRefreshTokenRepository";

interface IAuthenticateMatrixRequest {
  email: string;
  password: string;
}

interface IAuthenticateMatrixResponse {
  token: string;
  refreshToken: MatrixRefreshToken;
}

@injectable()
class AuthenticateMatrixService {
  constructor(
    @inject("MatrixesRepository")
    private matrixesRepository: IMatrixesRepository,

    @inject("GenerateMatrixesTokenProvider")
    private tokenProvider: IGenerateMatrixesTokenProvider,

    @inject("MatrixesRefreshTokenRepository")
    private refreshTokenRepository: IMatrixesRefreshTokenRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    email,
    password,
  }: IAuthenticateMatrixRequest): Promise<IAuthenticateMatrixResponse> {
    const user = await this.matrixesRepository.findByEmail(email);

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

export default AuthenticateMatrixService;
