import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IEstablishmentsRepository from "../infra/repositories/IEstablishmentsRepository";

@injectable()
class GetEstablishmentService {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentsRepository
  ) {}

  async execute(matrixId: string) {
    const establishment =
      await this.establishmentRepository.findByMatrixId(matrixId);

    if (establishment && establishment.length < 1) {
      throw new AppError("Você ainda não tem estabelecimentos cadastrados");
    }

    return establishment;
  }
}

export default GetEstablishmentService;
