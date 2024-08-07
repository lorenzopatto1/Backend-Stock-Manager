import RefreshTokenFunctionaryService from "../../../services/RefreshTokenFunctionaryService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class FunctionarySessionsController {
  public async create(request: Request, response: Response) {
    const { refreshToken } = request.body;

    const refreshTokenService = container.resolve(
      RefreshTokenFunctionaryService
    );

    const token = await refreshTokenService.execute(refreshToken);

    return response.json(token);
  }
}
