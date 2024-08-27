import { inject, injectable } from "tsyringe";
import IProductsRepository from "../repositories/IProductsRepository";
import { Product } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class UpdateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(product: Product) {
    const productExists = await this.productsRepository.findById(product.id);

    if (!productExists) {
      throw new AppError("Não foi possivel encontrar seu produto");
    }

    const updatedProduct = await this.productsRepository.update(product);

    return updatedProduct;
  }
}

export default UpdateProductService;
