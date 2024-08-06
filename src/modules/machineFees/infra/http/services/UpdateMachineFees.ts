import { inject, injectable } from "tsyringe";
import IMachineFeesRepository from "../../repositories/IMachineFeesRepository";
import { MachineFees } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class UpdateMachineFeesService {
  constructor(
    @inject("MachineFeesRepository")
    readonly machineFeesRepository: IMachineFeesRepository
  ) {}

  public async execute(data: MachineFees): Promise<MachineFees> {
    const machineFeesExists = this.machineFeesRepository.findById(data.id);

    if (!machineFeesExists) {
      throw new AppError("Não foi possivel encontrar seus dados");
    }

    const updatedMachineFees = this.machineFeesRepository.update(data);

    return updatedMachineFees;
  }
}

export default UpdateMachineFeesService;
