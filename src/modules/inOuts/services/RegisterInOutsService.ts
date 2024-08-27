import { v4 as uuidv4 } from "uuid";

import { InOut, InOutEnum } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import IInOutsRepository from "../repositories/IInOutsRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class RegisterInOutsService {
  constructor(
    @inject("InOutsRepository")
    private inOutsRepository: IInOutsRepository
  ) {}

  public async execute(data: InOut): Promise<InOut> {
    const inOutAlreadyExists =
      await this.inOutsRepository.findByEstablishmentId(data.establishment_Id);

    if (data.type !== InOutEnum.In && data.type !== InOutEnum.Out) {
      throw new AppError("O tipo deve ser (Entrada/Saida)");
    }

    inOutAlreadyExists.forEach((inOut) => {
      if (inOut.description === data.description)
        throw new AppError(
          `Você ja tem uma ${data.type === "In" ? "entrada" : "saída"} com essa descrição`
        );
    });

    const newInOut = await this.inOutsRepository.create({
      ...data,
      id: uuidv4(),
    });

    return newInOut;
  }
}

export default RegisterInOutsService;
