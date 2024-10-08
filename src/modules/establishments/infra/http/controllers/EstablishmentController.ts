import CreateEstablishmentService from "@modules/establishments/services/CreateEstablishmentService";
import DeleteEstablishmentService from "@modules/establishments/services/DeleteEstablishmentService";
import GetEstablishmentService from "@modules/establishments/services/GetEstablishmentService";
import UpdateEstablishmentService from "@modules/establishments/services/UpdateEstablishmentService";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class EstablishmentController {
  public async read(request: Request, response: Response) {
    const { matrix_Id } = request.params;

    const getEstablishment = container.resolve(GetEstablishmentService);

    const establishments = await getEstablishment.execute(matrix_Id);

    return response.json(instanceToPlain(establishments));
  }

  public async create(request: Request, response: Response) {
    const establishment = request.body;
    const { id } = request.matrix;

    const newEstablishmentData = {
      ...establishment,
      matrix_Id: id,
    };

    const createEstablishment = container.resolve(CreateEstablishmentService);

    const newEstablishment =
      await createEstablishment.execute(newEstablishmentData);

    return response.json(instanceToPlain(newEstablishment));
  }

  public async update(request: Request, response: Response) {
    const establishment = request.body;

    const updateEstablishment = container.resolve(UpdateEstablishmentService);

    const updatedEstablishment =
      await updateEstablishment.execute(establishment);

    return response.json(instanceToPlain(updatedEstablishment));
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.body;

    const updateEstablishment = container.resolve(DeleteEstablishmentService);

    await updateEstablishment.execute(id);

    return response.json({ message: "Deletado com sucesso!" });
  }
}
