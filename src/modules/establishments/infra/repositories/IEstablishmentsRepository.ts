import { $Enums, Establishment } from "@prisma/client";

export interface IEstablishmentUpdate {
  id?: string;
  matrix_Id?: string;
  type?: $Enums.EstablishmentEnum;
  name?: string;
  phoneNumber?: string;
  created_At?: Date;
}

export default interface IEstablishmentsRepository {
  findById: (id: string) => Promise<Establishment | null>;
  findByMatrixId: (matrixId: string) => Promise<Establishment[]>;
  create: (establishment: Establishment) => Promise<Establishment>;
  update: (establishment: IEstablishmentUpdate) => Promise<Establishment>;
  delete: (id: string) => Promise<void>;
}
