import { inject, injectable } from "tsyringe";
import ISalesRepository from "../repositories/ISalesRepository";
import AppError from "@shared/errors/AppError";
import { Sale } from "@prisma/client";

@injectable()
class FindSalesByEstablishmentIdService {
  constructor(
    @inject("SalesRepository")
    private salesRepository: ISalesRepository
  ) {}

  public async execute(establishment_Id: string): Promise<Sale[]> {
    const sales =
      await this.salesRepository.findByEstablishmentId(establishment_Id);

    if (!sales) {
      throw new AppError("Você não tem vendas registradas");
    }

    return sales;
  }
}

export default FindSalesByEstablishmentIdService;
