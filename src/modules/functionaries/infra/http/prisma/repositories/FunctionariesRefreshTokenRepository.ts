import AppError from "@shared/errors/AppError";
import { prisma } from "database";
import IFunctionariesRefreshTokenRepository from "@modules/functionaries/repositories/IFunctionariesRefreshTokenRepository";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

class FunctionariesRefreshTokenRepository
  implements IFunctionariesRefreshTokenRepository
{
  public async findByRefreshToken(refresh_token: string) {
    const refreshToken = await prisma.functionaryRefreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) {
      throw new AppError("Você precisa estar logado", 401);
    }
    return refreshToken;
  }
  public async create(functionary_Id: string) {
    const expires_In = dayjs().add(15, "days").unix();

    const generateRefreshToken = await prisma.functionaryRefreshToken.create({
      data: {
        id: uuidv4(),
        functionary_Id,
        expires_In,
      },
    });
    return generateRefreshToken;
  }

  public async delete(functionary_Id: string) {
    await prisma.functionaryRefreshToken.deleteMany({
      where: { functionary_Id },
    });
  }
}

export default FunctionariesRefreshTokenRepository;
