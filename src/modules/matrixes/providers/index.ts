import { container } from "tsyringe";

import IGenerateMatrixesTokenProvider from "./GenerateMatrixesTokenProvider/models/IGenerateMatrixesTokenProvider";
import GenerateMatrixesTokenProvider from "./GenerateMatrixesTokenProvider/implementations/GenerateMatrixesTokenProvider";
import IMatrixesRefreshTokenRepository from "@modules/matrixes/repositories/IMatrixesRefreshTokenRepository";
import MatrixesRefreshTokenRepository from "../infra/http/prisma/repositories/MatrixesRefreshTokenRepository";

container.registerSingleton<IGenerateMatrixesTokenProvider>(
  "GenerateMatrixesTokenProvider",
  GenerateMatrixesTokenProvider
);

container.registerSingleton<IMatrixesRefreshTokenRepository>(
  "MatrixesRefreshTokenRepository",
  MatrixesRefreshTokenRepository
);
