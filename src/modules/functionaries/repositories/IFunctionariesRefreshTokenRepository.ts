import { FunctionaryRefreshToken } from "@prisma/client";

class IFunctionariesRefreshTokenRepository {
  findByRefreshToken: (id: string) => Promise<FunctionaryRefreshToken | null>;
  create: (id: string) => Promise<FunctionaryRefreshToken>;
  delete: (matrixId: string) => Promise<void>;
}

export default IFunctionariesRefreshTokenRepository;
