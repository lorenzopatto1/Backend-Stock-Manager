import { Decimal } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateMachineFeesService from "../services/UpdateMachineFees";
import { instanceToPlain } from "class-transformer";
import GetMachineFeesByEstablishmentIdService from "../services/GetMachineFeesByEstablishmentIdService";

export default class MachineFeesController {
  public async read(request: Request, response: Response) {
    const { establishment_Id } = request.params;

    const getMachineFees = container.resolve(
      GetMachineFeesByEstablishmentIdService
    );

    const machineFees = await getMachineFees.execute(establishment_Id);

    return response.json(instanceToPlain(machineFees));
  }
  public async update(request: Request, response: Response) {
    const data = request.body;

    const updateMachineFees = container.resolve(UpdateMachineFeesService);

    const updatedMachineFees = await updateMachineFees.execute(data);

    return response.json(instanceToPlain(updatedMachineFees));
  }
}
