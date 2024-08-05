import { container } from "tsyringe";
import IEstablishmentsRepository from "../infra/repositories/IEstablishmentsRepository";
import EstablishmentsRepository from "../infra/http/prisma/repositories/EstablishmentsRepository";

container.registerSingleton<IEstablishmentsRepository>(
  "EstablishmentRepository",
  EstablishmentsRepository
);
