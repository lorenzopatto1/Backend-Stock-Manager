import { Request, Response } from "express";
import { container } from "tsyringe";
import GetTotalCostAndSaleValuesService from "../../../services/GetTotalCostAndSaleValuesService";
import { instanceToPlain } from "class-transformer";

export default class TotalCostAndSaleValuesController {
  public async read(request: Request, response: Response) {
    const { establishment_Id } = request.params;

    const getValues = container.resolve(GetTotalCostAndSaleValuesService);

    const values = await getValues.execute(establishment_Id);

    return response.json(instanceToPlain(values));
  }
}
