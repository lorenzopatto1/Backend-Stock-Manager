import { inject, injectable } from "tsyringe";
import IProductsRepository from "../../repositories/IProductsRepository";
import { Product, ProductEnum } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class RegisterProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(product: Product) {
    const productExists = await this.productsRepository.findByName(
      product.name
    );

    if (
      product.type !== ProductEnum.Unity &&
      product.type !== ProductEnum.Mix
    ) {
      throw new AppError("O tipo deve ser (Unidade/Mix)");
    }

    if (productExists) {
      throw new AppError("Já existe um produto com esse nome");
    }

    const newProduct = await this.productsRepository.create(product);

    return newProduct;
  }
}

export default RegisterProductService;
