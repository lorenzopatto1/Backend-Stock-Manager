import { inject, injectable } from "tsyringe";
import IProductsRepository from "../../repositories/IProductsRepository";
import { Product } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class CreateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(product: Product) {
    const productExists = await this.productsRepository.findByName(
      product.name
    );

    if (productExists) {
      throw new AppError("Já existe um produto com esse nome");
    }

    const newProduct = await this.productsRepository.create(product);

    return newProduct;
  }
}

export default CreateProductService;
