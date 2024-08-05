import { inject, injectable } from "tsyringe";
import IProductsRepository from "../../repositories/IProductsRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class GetProductById {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}
  async execute(id: string) {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError("Produto não encontrado");
    }

    return product;
  }
}

export default GetProductById;
