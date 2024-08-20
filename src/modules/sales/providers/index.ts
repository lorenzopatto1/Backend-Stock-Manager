import ISalesRepository from "@modules/sales/repositories/ISalesRepository";
import { container } from "tsyringe";
import SalesRepository from "../infra/http/prisma/repositories/SalesRepository";

container.registerSingleton<ISalesRepository>(
  "SalesRepository",
  SalesRepository
);
