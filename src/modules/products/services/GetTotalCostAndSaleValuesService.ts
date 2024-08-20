import GetProductsByEstablishmentIdService from "./GetProductsByEstablishmentIdService";
import { container } from "tsyringe";

class GetTotalCostAndSaleValuesService {
  public async execute(establishment_Id: string) {
    const getProducts = container.resolve(GetProductsByEstablishmentIdService);

    const products = await getProducts.execute(establishment_Id);

    const unityProducts = products.filter((product) => product.type !== "Mix");

    const totalCost = unityProducts.reduce(
      (acc, product) => (acc += product.purchasePrice * product.quantity),
      0
    );
    const totalSale = unityProducts.reduce(
      (acc, product) => (acc += product.salePrice * product.quantity),
      0
    );

    return { totalCost, totalSale };
  }
}

export default GetTotalCostAndSaleValuesService;
