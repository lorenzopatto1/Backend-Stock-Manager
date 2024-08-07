import { container } from "tsyringe";

import IMatrixesRepository from "@modules/matrixes/repositories/IMatrixesRepository";
import MatrixesRepository from "@modules/matrixes/infra/http/prisma/repositories/MatrixesRepository";
import IHashProvider from "./providers/HashProvider/models/IHashProvider";
import BCryptHashProvider from "./providers/HashProvider/implementations/BCryptHashProvider";
import IMatrixesRefreshTokenRepository from "@modules/matrixes/repositories/IMatrixesRefreshTokenRepository";
import MatrixesRefreshTokenRepository from "@modules/matrixes/infra/http/prisma/repositories/MatrixesRefreshTokenRepository";
import GenerateMatrixesTokenProvider from "@modules/matrixes/providers/GenerateMatrixesTokenProvider/implementations/GenerateMatrixesTokenProvider";
import IGenerateMatrixesTokenProvider from "@modules/matrixes/providers/GenerateMatrixesTokenProvider/models/IGenerateMatrixesTokenProvider";
import IEstablishmentsRepository from "@modules/establishments/infra/repositories/IEstablishmentsRepository";
import EstablishmentsRepository from "@modules/establishments/infra/http/prisma/repositories/EstablishmentsRepository";
import IProductsRepository from "@modules/products/infra/repositories/IProductsRepository";
import ProductsRepository from "@modules/products/infra/http/prisma/repositories/ProductsRepository";
import IInOutsRepository from "@modules/inOuts/repositories/IInOutsRepository";
import InOutsRepository from "@modules/inOuts/infra/http/prisma/repositories/inOutsRepository";
import MachineFeesRepository from "@modules/machineFees/infra/http/prisma/repositories/MachineFeesRepository";
import IMachineFeesRepository from "@modules/machineFees/infra/repositories/IMachineFeesRepository";
import IGenerateFunctionariesTokenProvider from "@modules/functionaries/providers/GenerateFunctionariesTokenProvider/models/IGenerateFunctionariesTokenProvider";
import IFunctionariesRefreshTokenRepository from "@modules/functionaries/repositories/IFunctionariesRefreshTokenRepository";
import GenerateFunctionariesTokenProvider from "@modules/functionaries/providers/GenerateFunctionariesTokenProvider/implementations/GenerateFunctionariesTokenProvider";
import FunctionariesRefreshTokenRepository from "@modules/functionaries/infra/http/prisma/repositories/FunctionariesRefreshTokenRepository";
import FunctionariesRepository from "@modules/functionaries/infra/http/prisma/repositories/FunctionariesRepository";
import IFunctionariesRepository from "@modules/functionaries/repositories/IFunctionariesRepository";

container.registerSingleton<IMatrixesRepository>(
  "MatrixesRepository",
  MatrixesRepository
);

container.registerSingleton<IMatrixesRefreshTokenRepository>(
  "MatrixesRefreshTokenRepository",
  MatrixesRefreshTokenRepository
);

container.registerSingleton<IGenerateMatrixesTokenProvider>(
  "GenerateMatrixesTokenProvider",
  GenerateMatrixesTokenProvider
);

container.registerSingleton<IFunctionariesRepository>(
  "FunctionariesRepository",
  FunctionariesRepository
);

container.registerSingleton<IGenerateFunctionariesTokenProvider>(
  "GenerateFunctionariesTokenProvider",
  GenerateFunctionariesTokenProvider
);

container.registerSingleton<IFunctionariesRefreshTokenRepository>(
  "FunctionariesRefreshTokenRepository",
  FunctionariesRefreshTokenRepository
);

container.registerSingleton<IEstablishmentsRepository>(
  "EstablishmentRepository",
  EstablishmentsRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IInOutsRepository>(
  "InOutsRepository",
  InOutsRepository
);

container.registerSingleton<IMachineFeesRepository>(
  "MachineFeesRepository",
  MachineFeesRepository
);

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);
