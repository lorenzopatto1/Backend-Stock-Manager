import { MatrixRefreshToken } from "@prisma/client";

export default interface IMatrixesRefreshTokenRepository {
  findByRefreshToken: (id: string) => Promise<MatrixRefreshToken | null>;
  create: (id: string) => Promise<MatrixRefreshToken>;
  delete: (matrixId: string) => Promise<void>;
}
