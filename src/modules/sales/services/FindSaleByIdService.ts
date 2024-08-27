import { inject, injectable } from "tsyringe";
import ISalesRepository from "../repositories/ISalesRepository";
import AppError from "@shared/errors/AppError";
import { Sale } from "@prisma/client";

@injectable()
class FindSaleByIdService {
  constructor(
    @inject("SalesRepository")
    private salesRepository: ISalesRepository
  ) {}

  public async execute(id: string): Promise<Sale> {
    const sale = await this.salesRepository.findById(id);

    if (!sale) {
      throw new AppError("Não encontramos sua venda");
    }

    return sale;
  }
}

export default FindSaleByIdService;
