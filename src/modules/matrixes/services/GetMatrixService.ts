import { inject, injectable } from "tsyringe";
import IMatrixesRepository from "../repositories/IMatrixesRepository";
import { Matrix } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class GetMatrixService {
  constructor(
    @inject("MatrixesRepository")
    private matrixesRepository: IMatrixesRepository
  ) {}

  public async execute(id: string): Promise<Matrix> {
    const user = await this.matrixesRepository.findById(id);

    if (!user) {
      throw new AppError("Nenhum usuário encontrado", 400);
    }

    return user;
  }
}

export default GetMatrixService;
