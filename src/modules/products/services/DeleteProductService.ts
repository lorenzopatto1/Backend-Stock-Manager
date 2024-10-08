import { inject, injectable } from "tsyringe";
import IProductsRepository from "@modules/products/repositories/IProductsRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class DeleteProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string) {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) {
      throw new AppError("Não foi possivel encontrar seu produto");
    }
    await this.productsRepository.delete(productExists.id);
  }
}

export default DeleteProductService;
