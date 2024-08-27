import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IEstablishmentsRepository from "../infra/repositories/IEstablishmentsRepository";
import { Establishment } from "@prisma/client";

@injectable()
class UpdateEstablishmentService {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentsRepository: IEstablishmentsRepository
  ) {}

  async execute(establishment: Establishment) {
    const establishmentExists = await this.establishmentsRepository.findById(
      establishment.id
    );

    if (!establishmentExists) {
      throw new AppError("Estabelecimento inexistente", 401);
    }
    const updateEstablishment =
      await this.establishmentsRepository.update(establishment);

    return updateEstablishment;
  }
}

export default UpdateEstablishmentService;
