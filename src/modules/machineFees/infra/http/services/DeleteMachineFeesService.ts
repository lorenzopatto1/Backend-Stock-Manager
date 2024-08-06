import { inject, injectable } from "tsyringe";
import IMachineFeesRepository from "../../repositories/IMachineFeesRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class DeleteMachineFeesService {
  constructor(
    @inject("MachineFeesRepository")
    private machineFeesRepository: IMachineFeesRepository
  ) {}
  public async execute(establishmentId: string) {
    const machineFeesExists =
      await this.machineFeesRepository.findByEstablishmentId(establishmentId);

    if (!machineFeesExists) {
      throw new AppError(
        "Não encontramos taxas relacionadas a esse estabelecimento"
      );
    }
    await this.machineFeesRepository.delete(establishmentId);
  }
}

export default DeleteMachineFeesService;
