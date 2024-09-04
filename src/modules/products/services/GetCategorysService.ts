import GetProductsByEstablishmentIdService from "./GetProductsByEstablishmentIdService";
import { container, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";

@injectable()
class GetCategorysService {
  public async execute(establishment_Id: string): Promise<string[]> {
    const getProducts = container.resolve(GetProductsByEstablishmentIdService);

    const products = await getProducts.execute(establishment_Id);

    const categorys = [...new Set(products.map((product) => product.category))];

    if (!categorys) {
      throw new AppError("Não encontramos suas categorias");
    }

    return categorys;
  }
}

export default GetCategorysService;
