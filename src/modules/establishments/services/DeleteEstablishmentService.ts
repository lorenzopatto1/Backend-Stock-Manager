import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IEstablishmentsRepository from "../infra/repositories/IEstablishmentsRepository";

@injectable()
class DeleteEstablishmentService {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentsRepository
  ) {}

  async execute(id: string) {
    const establishment = await this.establishmentRepository.findById(id);

    if (!establishment) {
      throw new AppError("Estabelecimento inexistente");
    }

    await this.establishmentRepository.delete(id);
  }
}

export default DeleteEstablishmentService;
