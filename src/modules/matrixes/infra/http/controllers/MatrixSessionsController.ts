import AuthenticateMatrixService from "../../../services/AuthenticateMatrixService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class MatrixSessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateMatrix = container.resolve(AuthenticateMatrixService);

    const token = await authenticateMatrix.execute({ email, password });

    return response.json(token);
  }
}
