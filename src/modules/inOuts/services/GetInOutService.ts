import { inject, injectable } from "tsyringe";
import IInOutsRepository from "../repositories/IInOutsRepository";
import AppError from "@shared/errors/AppError";
import { InOut } from "@prisma/client";

@injectable()
class GetInOutService {
  constructor(
    @inject("InOutsRepository")
    private inOutsRepository: IInOutsRepository
  ) {}

  public async execute(id: string): Promise<InOut> {
    const inOut = await this.inOutsRepository.findById(id);

    if (!inOut) {
      throw new AppError("Não foi possivel encontrar sua entrada/saida");
    }

    return inOut;
  }
}

export default GetInOutService;
