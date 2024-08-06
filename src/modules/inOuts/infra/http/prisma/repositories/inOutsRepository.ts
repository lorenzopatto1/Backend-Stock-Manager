import { v4 as uuidv4 } from "uuid";
import IInOutsRepository from "@modules/inOuts/repositories/IInOutsRepository";
import { InOut } from "@prisma/client";
import { prisma } from "database";

class InOutsRepository implements IInOutsRepository {
  public async findById(id: string): Promise<InOut | null> {
    const inOut = await prisma.inOut.findFirst({
      where: {
        id,
      },
    });
    return inOut;
  }

  public async findByEstablishmentId(
    establishmentId: string
  ): Promise<InOut[]> {
    const inOuts = await prisma.inOut.findMany({
      where: {
        establishment_Id: establishmentId,
      },
    });
    return inOuts;
  }

  public async create(data: InOut): Promise<InOut> {
    const inOut = await prisma.inOut.create({
      data: {
        ...data,
        id: uuidv4(),
      },
    });
    return inOut;
  }

  public async update(data: InOut): Promise<InOut> {
    const updatedInOut = await prisma.inOut.update({
      where: {
        id: data.id,
      },
      data,
    });

    return updatedInOut;
  }

  public async delete(id: string): Promise<void> {
    await prisma.inOut.delete({
      where: {
        id,
      },
    });
  }
}

export default InOutsRepository;
