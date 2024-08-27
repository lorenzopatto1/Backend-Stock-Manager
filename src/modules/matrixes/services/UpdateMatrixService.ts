import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IMatrixesRepository from "../repositories/IMatrixesRepository";
import { Matrix } from "@prisma/client";
import IHashProvider from "@shared/container/providers/HashProvider/models/IHashProvider";

@injectable()
class UpdateMatrixService {
  constructor(
    @inject("MatrixesRepository")
    private matrixesRepository: IMatrixesRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}
  async execute(matrix: Matrix) {
    const matrixExists = await this.matrixesRepository.findById(matrix.id);

    if (!matrixExists) {
      throw new AppError("Faça login para editar informações", 401);
    }

    const matrixesEquals =
      matrix.name === matrixExists.name &&
      matrix.emailAddress === matrixExists.emailAddress &&
      matrix.phoneNumber === matrixExists.phoneNumber &&
      (await this.hashProvider.compareHash(
        matrix.password,
        matrixExists.password
      ));

    if (matrixesEquals) {
      throw new AppError("Os dados continuam iguais", 401);
    }
    const hashedPassword =
      matrix.password &&
      (await this.hashProvider.generateHash(matrix.password));

    const updatedMatrix = await this.matrixesRepository.update({
      ...matrix,
      password: hashedPassword,
    });

    return { updatedMatrix };
  }
}

export default UpdateMatrixService;
