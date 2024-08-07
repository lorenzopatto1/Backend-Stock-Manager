import { container } from "tsyringe";
import { Request, Response } from "express";
import AuthenticateFunctionaryService from "../../../services/AuthenticateFunctionaryService";

export default class FunctionariesSessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateFunctionary = container.resolve(
      AuthenticateFunctionaryService
    );

    const token = await authenticateFunctionary.execute({ email, password });

    return response.json(token);
  }
}
