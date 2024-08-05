import { Request, Response } from "express";
import CreateMatrixServices from "../../../services/CreateMatrixService";
import { container } from "tsyringe";
import { instanceToPlain } from "class-transformer";
import GetMatrixServices from "../../../services/GetMatrixService";
import UpdateMatrixService from "@modules/matrixes/services/UpdateMatrixService";

export default class MatrixesController {
  public async read(request: Request, response: Response) {
    const { id } = request.body;

    const getMatrix = container.resolve(GetMatrixServices);

    const user = await getMatrix.execute(id);

    return response.json(instanceToPlain(user));
  }
  public async create(request: Request, response: Response) {
    const { name, email, phoneNumber, password } = request.body;

    const createMatrix = container.resolve(CreateMatrixServices);

    const user = await createMatrix.execute({
      name,
      email,
      phoneNumber,
      password,
    });

    return response.json(instanceToPlain(user));
  }

  public async update(request: Request, response: Response) {
    const matrix = request.body;

    const updateMatrix = container.resolve(UpdateMatrixService);
    const updatedMatrix = await updateMatrix.execute(matrix);

    response.json(instanceToPlain(updatedMatrix));
  }
}
