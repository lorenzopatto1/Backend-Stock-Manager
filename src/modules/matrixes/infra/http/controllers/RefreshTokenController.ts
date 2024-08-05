import RefreshTokenMatrixService from "@modules/matrixes/services/RefreshTokenMatrixService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class RefreshTokenController {
  public async create(request: Request, response: Response) {
    const { refreshToken } = request.body;

    const refreshTokenService = container.resolve(RefreshTokenMatrixService);

    const token = await refreshTokenService.execute(refreshToken);

    return response.json(token);
  }
}
