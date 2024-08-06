import { inject, injectable } from "tsyringe";
import IInOutsRepository from "../repositories/IInOutsRepository";
import { InOut } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class UpdateInOutService {
  constructor(
    @inject("InOutsRepository")
    private inOutsRepository: IInOutsRepository
  ) {}

  public async execute(data: InOut): Promise<InOut> {
    const inOutExists = await this.inOutsRepository.findById(data.id);

    if (!inOutExists) {
      throw new AppError("Entrada/Saída Não encontrada");
    }

    const updatedInOut = await this.inOutsRepository.update(data);

    return updatedInOut;
  }
}

export default UpdateInOutService;
