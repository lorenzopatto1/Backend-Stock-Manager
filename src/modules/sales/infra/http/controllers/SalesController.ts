import DeleteSaleService from "@modules/sales/services/DeleteSaleService";
import FindSaleByIdService from "@modules/sales/services/FindSaleByIdService";
import FindSalesByEstablishmentIdService from "@modules/sales/services/FindSalesByEstablishmentIdService";
import RegisterSaleService from "@modules/sales/services/RegisterSaleService";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class SalesController {
  public async readById(request: Request, response: Response) {
    const { id } = request.params;

    const findSale = container.resolve(FindSaleByIdService);

    const sale = await findSale.execute(id);

    return response.json(instanceToPlain(sale));
  }

  public async readByEstablishmentId(request: Request, response: Response) {
    const { establishment_Id } = request.params;

    const findSale = container.resolve(FindSalesByEstablishmentIdService);

    const sale = await findSale.execute(establishment_Id);

    return response.json(instanceToPlain(sale));
  }

  public async create(request: Request, response: Response) {
    const data = request.body;

    const registerSale = container.resolve(RegisterSaleService);

    const newSale = await registerSale.execute(data);

    return response.json(instanceToPlain(newSale));
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.body;

    const deleteSale = container.resolve(DeleteSaleService);

    await deleteSale.execute(id);

    return response.json({
      error: false,
      message: "Venda removida com sucesso!",
    });
  }
}
