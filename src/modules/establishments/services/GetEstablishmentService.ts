import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IEstablishmentsRepository from "../infra/repositories/IEstablishmentsRepository";
import IMatrixesRepository from "@modules/matrixes/repositories/IMatrixesRepository";

@injectable()
class GetEstablishmentService {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentsRepository,
    @inject("MatrixesRepository")
    private matrixesRepository: IMatrixesRepository
  ) {}

  async execute(matrixId: string) {
    const matrix = await this.matrixesRepository.findById(matrixId);

    if (!matrix) {
      throw new AppError("Matriz não encontrada");
    }

    const establishment =
      await this.establishmentRepository.findByMatrixId(matrixId);

    if (establishment && establishment.length < 1) {
      throw new AppError("Você ainda não tem estabelecimentos cadastrados");
    }

    return establishment;
  }
}

export default GetEstablishmentService;
