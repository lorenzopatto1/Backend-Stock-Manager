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

container.registerSingleton<IEstablishmentsRepository>(
  "EstablishmentRepository",
  EstablishmentsRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);
