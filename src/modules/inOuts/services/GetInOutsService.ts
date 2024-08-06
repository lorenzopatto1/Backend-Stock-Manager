import { inject, injectable } from "tsyringe";
import IInOutsRepository from "../repositories/IInOutsRepository";
import AppError from "@shared/errors/AppError";
import { InOut } from "@prisma/client";

@injectable()
class GetInOutsService {
  constructor(
    @inject("InOutsRepository")
    private inOutsRepository: IInOutsRepository
  ) {}

  public async execute(id: string): Promise<InOut[]> {
    const inOuts = await this.inOutsRepository.findByEstablishmentId(id);

    if (inOuts.length < 1) {
      throw new AppError("Você não tem entradas/saidas registradas");
    }

    return inOuts;
  }
}

export default GetInOutsService;
