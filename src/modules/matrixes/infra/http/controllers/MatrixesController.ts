import { Request, Response } from "express";
import CreateMatrixServices from "../../../services/CreateMatrixService";
import { container } from "tsyringe";
import { instanceToPlain } from "class-transformer";
import GetMatrixServices from "../../../services/GetMatrixService";
import UpdateMatrixService from "@modules/matrixes/services/UpdateMatrixService";

export default class MatrixesController {
  public async read(request: Request, response: Response) {
    const { id } = request.matrix;

    const getMatrix = container.resolve(GetMatrixServices);

    const user = await getMatrix.execute(id);

    return response.json(instanceToPlain(user));
  }
  public async create(request: Request, response: Response) {
    const data = request.body;

    const createMatrix = container.resolve(CreateMatrixServices);

    const user = await createMatrix.execute(data);

    return response.json(instanceToPlain(user));
  }

  public async update(request: Request, response: Response) {
    const matrix = request.body;
    const { id } = request.matrix;

    const matrixData = {
      ...matrix,
      id,
    };

    const updateMatrix = container.resolve(UpdateMatrixService);
    const updatedMatrix = await updateMatrix.execute(matrixData);

    response.json(instanceToPlain(updatedMatrix));
  }
}
