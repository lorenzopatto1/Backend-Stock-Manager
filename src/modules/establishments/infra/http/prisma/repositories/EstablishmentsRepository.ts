import IEstablishmentsRepository, {
  IEstablishmentUpdate,
} from "@modules/establishments/infra/repositories/IEstablishmentsRepository";
import { Establishment } from "@prisma/client";
import { prisma } from "database";

class EstablishmentsRepository implements IEstablishmentsRepository {
  public async findById(id: string): Promise<Establishment | null> {
    const establishment = await prisma.establishment.findUnique({
      where: { id },
      include: {
        machineFees: true,
      },
    });

    return establishment;
  }

  public async findByMatrixId(matrixId: string): Promise<Establishment[]> {
    const establishment = await prisma.establishment.findMany({
      where: { matrix_Id: matrixId },
      include: {
        machineFees: true,
        products: true,
        inOuts: true,
        sale: true,
      },
    });

    return establishment;
  }

  public async create(establishment: Establishment): Promise<Establishment> {
    const newEstablishment = await prisma.establishment.create({
      data: {
        ...establishment,
      },
    });
    return newEstablishment;
  }

  public async update(
    establishment: IEstablishmentUpdate
  ): Promise<Establishment> {
    const updatedEstablishment = await prisma.establishment.update({
      where: {
        id: establishment.id,
      },
      data: {
        ...establishment,
      },
    });

    return updatedEstablishment;
  }

  public async delete(id: string): Promise<void> {
    await prisma.establishment.delete({
      where: {
        id,
      },
    });
  }
}

export default EstablishmentsRepository;
