import { inject, injectable } from "tsyringe";
import IInOutsRepository from "../repositories/IInOutsRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class DeleteInOutService {
  constructor(
    @inject("InOutsRepository")
    private inOutsRepository: IInOutsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const inOutExists = await this.inOutsRepository.findById(id);

    if (!inOutExists) {
      throw new AppError("Entrada/Saída Não encontrada");
    }
    await this.inOutsRepository.delete(id);
  }
}

export default DeleteInOutService;
