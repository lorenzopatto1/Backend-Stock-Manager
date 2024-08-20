import { inject, injectable } from "tsyringe";
import ISalesRepository from "../repositories/ISalesRepository";
import AppError from "@shared/errors/AppError";
import { prisma } from "database";
import IProductsRepository from "@modules/products/repositories/IProductsRepository";

@injectable()
class DeleteSaleService {
  constructor(
    @inject("SalesRepository")
    private salesRepository: ISalesRepository,

    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const saleExists = await this.salesRepository.findById(id);

    if (!saleExists) {
      throw new AppError("Venda não encontrada");
    }

    await this.salesRepository.delete(id);
  }
}

export default DeleteSaleService;
