import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IEstablishmentsRepository from "../infra/repositories/IEstablishmentsRepository";
import { EstablishmentEnum } from "@prisma/client";
import IMachineFeesRepository from "@modules/machineFees/infra/repositories/IMachineFeesRepository";

@injectable()
class DeleteEstablishmentService {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentsRepository,
    @inject("MachineFeesRepository")
    private machineFeesRepository: IMachineFeesRepository
  ) {}

  async execute(id: string) {
    const establishment = await this.establishmentRepository.findById(id);

    if (!establishment) {
      throw new AppError("Estabelecimento inexistente");
    }

    const machineFeesExists =
      await this.machineFeesRepository.findByEstablishmentId(id);

    if (!machineFeesExists) {
      await this.establishmentRepository.delete(id);
    }

    await this.machineFeesRepository.delete(id);
    await this.establishmentRepository.delete(id);

    const establishmentList = await this.establishmentRepository.findByMatrixId(
      establishment.matrix_Id
    );

    if (establishmentList.length === 1) {
      const changeEstablishmentType = establishmentList.find(
        (est) => est.type === EstablishmentEnum.Network
      );

      if (changeEstablishmentType) {
        await this.establishmentRepository.update({
          id: changeEstablishmentType.id,
          type: EstablishmentEnum.Unique,
        });
      }
    }
  }
}

export default DeleteEstablishmentService;
