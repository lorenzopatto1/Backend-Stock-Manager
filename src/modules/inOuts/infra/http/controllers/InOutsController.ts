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
    const { id } = request.body;

    const getInOut = container.resolve(GetInOutService);

    const inOut = await getInOut.execute(id);

    return response.json(instanceToPlain(inOut));
  }

  async readAll(request: Request, response: Response) {
    const { establishmentId } = request.body;

    const getInOuts = container.resolve(GetInOutsService);

    const inOuts = await getInOuts.execute(establishmentId);

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
    const { id } = request.body;

    const deleteInOut = container.resolve(DeleteInOutService);

    await deleteInOut.execute(id);
  }
}
