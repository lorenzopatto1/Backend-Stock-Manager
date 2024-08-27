import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IMatrixesRefreshTokenRepository from "../repositories/IMatrixesRefreshTokenRepository";
import IGenerateTokenProvider from "../providers/GenerateMatrixesTokenProvider/models/IGenerateMatrixesTokenProvider";
import dayjs from "dayjs";

@injectable()
class RefreshTokenMatrixService {
  constructor(
    @inject("MatrixesRefreshTokenRepository")
    private refreshTokenRepository: IMatrixesRefreshTokenRepository,

    @inject("GenerateMatrixesTokenProvider")
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

    const token = await this.tokenProvider.execute(refreshToken.matrix_Id);

    if (refreshTokenExpired) {
      await this.refreshTokenRepository.delete(refreshToken.matrix_Id);
      const newRefreshToken = await this.refreshTokenRepository.create(
        refreshToken.matrix_Id
      );

      return { token, newRefreshToken };
    }

    return { token };
  }
}

export default RefreshTokenMatrixService;
