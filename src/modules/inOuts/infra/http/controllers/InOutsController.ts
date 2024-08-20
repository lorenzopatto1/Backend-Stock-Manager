import DeleteInOutService from "@modules/inOuts/services/DeleteInOutService";
import GetInOutService from "@modules/inOuts/services/GetInOutService";
import GetInOutsService from "@modules/inOuts/services/GetInOutsService";
import RegisterInOutsService from "@modules/inOuts/services/RegisterInOutsService";
import UpdateInOutService from "@modules/inOuts/services/UpdateInOutService";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class InOutsController {
  async readUnique(request: Request, response: Response) {
    const { id } = request.params;

    const getInOut = container.resolve(GetInOutService);

    const inOut = await getInOut.execute(id);

    return response.json(instanceToPlain(inOut));
  }

  async readAll(request: Request, response: Response) {
    const { establishment_Id } = request.params;

    const getInOuts = container.resolve(GetInOutsService);

    const inOuts = await getInOuts.execute(establishment_Id);

    return response.json(instanceToPlain(inOuts));
  }

  async create(request: Request, response: Response) {
    const data = request.body;

    const registerInOut = container.resolve(RegisterInOutsService);

    const newInOut = await registerInOut.execute(data);

    return response.json(instanceToPlain(newInOut));
  }

  async update(request: Request, response: Response) {
    const data = request.body;

    const updateInOut = container.resolve(UpdateInOutService);

    const updatedInOut = await updateInOut.execute(data);

    return response.json(instanceToPlain(updatedInOut));
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteInOut = container.resolve(DeleteInOutService);

    await deleteInOut.execute(id);

    return response.json({ message: "Entrada/Saída removido com sucesso!" });
  }
}
