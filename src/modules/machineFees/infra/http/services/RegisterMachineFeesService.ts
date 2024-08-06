import { inject, injectable } from "tsyringe";
import IMachineFeesRepository from "../../repositories/IMachineFeesRepository";
import { MachineFees } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class RegisterMachineFeesService {
  constructor(
    @inject("MachineFeesRepository")
    readonly machineFeesRepository: IMachineFeesRepository
  ) {}

  public async execute(data: MachineFees): Promise<MachineFees> {
    const machineFeesAlreadyExists =
      this.machineFeesRepository.findByEstablishmentId(data.establishment_id);

    if (!machineFeesAlreadyExists) {
      throw new AppError(
        "Seu estabelecimento ja possui uma configuração das taxas",
        401
      );
    }

    const newMachineFees = this.machineFeesRepository.create(data);

    return newMachineFees;
  }
}

export default RegisterMachineFeesService;
