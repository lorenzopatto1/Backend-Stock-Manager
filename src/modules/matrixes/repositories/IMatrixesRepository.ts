import { Matrix } from "@prisma/client";

export default interface IMatrixesRepository {
  findById: (id: string) => Promise<Matrix | null>;
  findByName: (name: string) => Promise<Matrix | null>;
  findByEmail: (emailAddress: string) => Promise<Matrix | null>;
  findByPhoneNumber: (phoneNumber: string) => Promise<Matrix | null>;
  create: (matrix: Matrix) => Promise<Matrix>;
  update: (matrix: Matrix) => Promise<Matrix>;
}
