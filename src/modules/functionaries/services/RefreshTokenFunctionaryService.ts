import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import IGenerateTokenProvider from "../providers/GenerateFunctionariesTokenProvider/models/IGenerateFunctionariesTokenProvider";
import dayjs from "dayjs";
import IFunctionariesRefreshTokenRepository from "../repositories/IFunctionariesRefreshTokenRepository";

@injectable()
class RefreshTokenFunctionaryService {
  constructor(
    @inject("FunctionariesRefreshTokenRepository")
    private refreshTokenRepository: IFunctionariesRefreshTokenRepository,

    @inject("GenerateFunctionariesTokenProvider")
    private tokenProvider: IGenerateTokenProvider
  ) {}
  async execute(refresh_token: string) {
    const refreshToken =
      await this.refreshTokenRepository.findByRefreshToken(refresh_token);

    if (!refreshToken) {
      throw new AppError("Você precisa fazer o login novamente", 401);
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expires_In)
    );

    const token = await this.tokenProvider.execute(refreshToken.functionary_Id);

    if (refreshTokenExpired) {
      await this.refreshTokenRepository.delete(refreshToken.functionary_Id);
      const newRefreshToken = await this.refreshTokenRepository.create(
        refreshToken.functionary_Id
      );

      return { token, newRefreshToken };
    }

    return { token };
  }
}

export default RefreshTokenFunctionaryService;
