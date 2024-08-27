import { container } from "tsyringe";

import IGenerateMatrixesTokenProvider from "./GenerateFunctionariesTokenProvider/models/IGenerateFunctionariesTokenProvider";
import GenerateFunctionariesTokenProvider from "./GenerateFunctionariesTokenProvider/implementations/GenerateFunctionariesTokenProvider";
import FunctionariesRefreshTokenRepository from "../infra/http/prisma/repositories/FunctionariesRefreshTokenRepository";
import IFunctionariesRefreshTokenRepository from "../repositories/IFunctionariesRefreshTokenRepository";

container.registerSingleton<IGenerateMatrixesTokenProvider>(
  "GenerateFunctionariesTokenProvider",
  GenerateFunctionariesTokenProvider
);

container.registerSingleton<IFunctionariesRefreshTokenRepository>(
  "FunctionariesRefreshTokenRepository",
  FunctionariesRefreshTokenRepository
);
