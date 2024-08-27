import { Request, Response } from "express";
import { container } from "tsyringe";

import GetCategorysService from "../../../services/GetCategorysService";
import { instanceToPlain } from "class-transformer";

export default class CategorysController {
  public async read(request: Request, response: Response) {
    const { establishment_Id } = request.params;

    const getCategorys = container.resolve(GetCategorysService);

    const categorys = await getCategorys.execute(establishment_Id);

    return response.json(instanceToPlain(categorys));
  }
}
