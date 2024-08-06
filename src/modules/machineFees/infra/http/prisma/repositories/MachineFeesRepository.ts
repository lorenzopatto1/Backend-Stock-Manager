import { prisma } from "database";
import { MachineFees } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import IMachineFeesRepository from "@modules/machineFees/infra/repositories/IMachineFeesRepository";
import { Decimal } from "@prisma/client/runtime/library";

export interface IMachineFeesProps {
  id?: string;
  establishment_Id: string;
  creditFee?: Decimal;
  debitFee?: Decimal;
  pixFee?: Decimal;
}

class MachineFeesRepository implements IMachineFeesRepository {
  public async findById(id: string): Promise<MachineFees | null> {
    const machineFees = await prisma.machineFees.findFirst({
      where: { id },
    });

    return machineFees;
  }
  public async findByEstablishmentId(
    establishmentId: string
  ): Promise<MachineFees | null> {
    const machineFees = await prisma.machineFees.findFirst({
      where: { establishment_Id: establishmentId },
    });

    return machineFees;
  }
  public async create(data: IMachineFeesProps): Promise<MachineFees> {
    const newMachineFees = await prisma.machineFees.create({
      data: {
        ...data,
        id: uuidv4(),
      },
    });

    return newMachineFees;
  }
  public async update(data: MachineFees): Promise<MachineFees> {
    const updateMachineFees = await prisma.machineFees.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });

    return updateMachineFees;
  }

  public async delete(establishmentId: string): Promise<void> {
    await prisma.machineFees.delete({
      where: {
        establishment_Id: establishmentId,
      },
    });
  }
}

export default MachineFeesRepository;
