import { inject, injectable } from "tsyringe";
import IMachineFeesRepository from "../../repositories/IMachineFeesRepository";
import AppError from "@shared/errors/AppError";
import { MachineFees } from "@prisma/client";

@injectable()
class GetMachineFeesByIdService {
  constructor(
    @inject("MachineFeesRepository")
    readonly machineFeesRepository: IMachineFeesRepository
  ) {}

  public async execute(id: string): Promise<MachineFees | null> {
    const machineFeesExists = this.machineFeesRepository.findById(id);

    if (!machineFeesExists) {
      throw new AppError("Não encontramos as taxas requisitadas");
    }

    return machineFeesExists;
  }
}

export default GetMachineFeesByIdService;
