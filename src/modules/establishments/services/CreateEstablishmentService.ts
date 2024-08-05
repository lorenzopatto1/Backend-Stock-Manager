import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IEstablishmentsRepository from "../infra/repositories/IEstablishmentsRepository";
import { Establishment, EstablishmentEnum } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

@injectable()
class CreateEstablishmentService {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentsRepository
  ) {}

  async execute(establishment: Establishment) {
    const establishmentExists =
      await this.establishmentRepository.findByMatrixId(
        establishment.matrix_Id
      );

    if (establishmentExists.length < 1) {
      establishment.type = EstablishmentEnum.Unique;
    } else {
      const changeEstablishmentType = establishmentExists.find(
        (est) => est.type === EstablishmentEnum.Unique
      );

      if (changeEstablishmentType) {
        await this.establishmentRepository.update({
          ...changeEstablishmentType,
          type: EstablishmentEnum.Network,
        });
      }

      establishment.type = EstablishmentEnum.Network;
    }
    const establishmentNameExists = establishmentExists?.find(
      (establishmentDb) => establishmentDb.name === establishment.name
    );

    if (establishmentNameExists) {
      throw new AppError("Você ja tem um estabelecimento com esse nome");
    }

    const establishmentData: Establishment = {
      ...establishment,
      id: uuidv4(),
    };

    const newEstablishment =
      this.establishmentRepository.create(establishmentData);

    return newEstablishment;
  }
}

export default CreateEstablishmentService;
