import { prisma } from "../../../../../../database";
import IMatrixesRepository from "../../../../repositories/IMatrixesRepository";
import { Matrix } from "@prisma/client";

class MatrixesRepository implements IMatrixesRepository {
  public async findById(id: string): Promise<Matrix | null> {
    const user = await prisma.matrix.findUnique({
      where: { id },
      include: {
        establishments: true,
      },
    });

    return user;
  }

  public async findByName(name: string): Promise<Matrix | null> {
    const user = await prisma.matrix.findUnique({
      where: { name },
    });

    return user;
  }

  public async findByEmail(emailAddress: string): Promise<Matrix | null> {
    const user = await prisma.matrix.findUnique({
      where: { emailAddress },
    });

    return user;
  }

  public async findByPhoneNumber(phoneNumber: string): Promise<Matrix | null> {
    const user = await prisma.matrix.findUnique({
      where: { phoneNumber },
    });

    return user;
  }

  public async create(matrix: Matrix): Promise<Matrix> {
    const user = await prisma.matrix.create({
      data: {
        ...matrix,
      },
    });

    return user;
  }

  public async update(matrix: Matrix): Promise<Matrix> {
    const updatedMatrix = await prisma.matrix.update({
      where: {
        emailAddress: matrix.emailAddress,
      },
      data: {
        ...matrix,
      },
    });

    return updatedMatrix;
  }
}

export default MatrixesRepository;
