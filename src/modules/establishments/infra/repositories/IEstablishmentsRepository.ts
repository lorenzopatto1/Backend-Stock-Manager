import { Establishment } from "@prisma/client";

export default interface IEstablishmentsRepository {
  findById: (id: string) => Promise<Establishment | null>;
  findByMatrixId: (matrixId: string) => Promise<Establishment[]>;
  create: (establishment: Establishment) => Promise<Establishment>;
  update: (establishment: Establishment) => Promise<Establishment>;
  delete: (id: string) => Promise<void>;
}
