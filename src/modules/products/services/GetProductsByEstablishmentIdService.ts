import { inject, injectable } from "tsyringe";
import IProductsRepository from "../repositories/IProductsRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class GetProductsByEstablishmentIdService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}
  async execute(establishmentId: string) {
    const products =
      await this.productsRepository.findByEstablishmentId(establishmentId);

    if (!products) {
      throw new AppError("Você não tem produtos cadastrados");
    }

    return products;
  }
}

export default GetProductsByEstablishmentIdService;
