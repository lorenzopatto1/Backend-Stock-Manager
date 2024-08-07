import { prisma } from "database";
import IFunctionariesRepository from "../../../../repositories/IFunctionariesRepository";
import { Functionary } from "@prisma/client";

class FunctionariesRepository implements IFunctionariesRepository {
  public async findById(id: string): Promise<Functionary | null> {
    const functionary = await prisma.functionary.findUnique({
      where: { id },
    });

    return functionary;
  }

  public async findByEmail(emailAddress: string): Promise<Functionary | null> {
    const functionary = await prisma.functionary.findUnique({
      where: { emailAddress },
    });

    return functionary;
  }

  public async findByPhoneNumber(
    phoneNumber: string
  ): Promise<Functionary | null> {
    const functionary = await prisma.functionary.findUnique({
      where: { phoneNumber },
    });

    return functionary;
  }

  public async create(functionary: Functionary): Promise<Functionary> {
    const newFunctionary = await prisma.functionary.create({
      data: {
        ...functionary,
      },
    });

    return newFunctionary;
  }

  public async update(functionary: Functionary): Promise<Functionary> {
    const updatedMatrix = await prisma.functionary.update({
      where: {
        emailAddress: functionary.emailAddress,
      },
      data: {
        ...functionary,
      },
    });

    return updatedMatrix;
  }

  public async delete(id: string): Promise<void> {
    await prisma.functionary.delete({
      where: { id },
    });
  }
}

export default FunctionariesRepository;
