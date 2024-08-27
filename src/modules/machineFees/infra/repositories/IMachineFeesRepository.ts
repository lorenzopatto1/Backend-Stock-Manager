import { MachineFees } from "@prisma/client";
import { IMachineFeesProps } from "../http/prisma/repositories/MachineFeesRepository";

export default interface IMachineFeesRepository {
  findById(id: string): Promise<MachineFees | null>;
  findByEstablishmentId(establishmentId: string): Promise<MachineFees | null>;
  create(data: IMachineFeesProps): Promise<MachineFees>;
  update(data: MachineFees): Promise<MachineFees>;
  delete(id: string): Promise<void>;
}
