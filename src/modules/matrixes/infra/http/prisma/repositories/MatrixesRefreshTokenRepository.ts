import AppError from "@shared/errors/AppError";
import { prisma } from "database";
import IMatrixesRefreshTokenRepository from "@modules/matrixes/repositories/IMatrixesRefreshTokenRepository";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

class MatrixesRefreshTokenRepository
  implements IMatrixesRefreshTokenRepository
{
  public async findByRefreshToken(refresh_token: string) {
    const refreshToken = await prisma.matrixRefreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) {
      throw new AppError("Você precisa estar logado", 401);
    }
    return refreshToken;
  }
  public async create(matrixId: string) {
    const expires_In = dayjs().add(15, "days").unix();

    const generateRefreshToken = await prisma.matrixRefreshToken.create({
      data: {
        id: uuidv4(),
        matrix_Id: matrixId,
        expires_In,
      },
    });
    return generateRefreshToken;
  }

  public async delete(matrixId: string) {
    await prisma.matrixRefreshToken.deleteMany({
      where: { matrix_Id: matrixId },
    });
  }
}

export default MatrixesRefreshTokenRepository;
