import { container } from "tsyringe";
import IProductsRepository from "../repositories/IProductsRepository";
import ProductsRepository from "../infra/http/prisma/repositories/ProductsRepository";

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);
