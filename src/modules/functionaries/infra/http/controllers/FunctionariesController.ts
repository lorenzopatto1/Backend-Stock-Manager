import { Request, Response } from "express";
import { container } from "tsyringe";
import { instanceToPlain } from "class-transformer";
import GetFunctionaryService from "../../../services/GetFunctionaryService";
import CreateFunctionaryService from "../../../services/CreateFunctionaryService";
import UpdateFunctionaryService from "@modules/functionaries/services/UpdateFunctionaryService";

export default class FunctionariesController {
  public async read(request: Request, response: Response) {
    const { id } = request.params;

    const getFunctionary = container.resolve(GetFunctionaryService);

    const functionary = await getFunctionary.execute(id);

    return response.json(instanceToPlain(functionary));
  }
  public async create(request: Request, response: Response) {
    const data = request.body;

    const createFunctionary = container.resolve(CreateFunctionaryService);

    const functionary = await createFunctionary.execute(data);

    return response.json(instanceToPlain(functionary));
  }

  public async update(request: Request, response: Response) {
    const functionary = request.body;

    const updateFunctionary = container.resolve(UpdateFunctionaryService);
    const updatedFunctionary = await updateFunctionary.execute(functionary);

    response.json(instanceToPlain(updatedFunctionary));
  }
}
