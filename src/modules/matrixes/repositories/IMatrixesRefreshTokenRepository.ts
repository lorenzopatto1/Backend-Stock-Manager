import { MatrixRefreshToken } from "@prisma/client";

class IMatrixesRefreshTokenRepository {
  findByRefreshToken: (id: string) => Promise<MatrixRefreshToken | null>;
  create: (id: string) => Promise<MatrixRefreshToken>;
  delete: (matrixId: string) => Promise<void>;
}

export default IMatrixesRefreshTokenRepository;
