import { Sale } from "@prisma/client";
import { ISaleData } from "../services/RegisterSaleService";

export default interface ISalesRepository {
  findById: (id: string) => Promise<Sale | null>;
  findByEstablishmentId: (establishment_Id: string) => Promise<Sale[]>;
  create: (sale: ISaleData) => Promise<Sale>;
  delete: (id: string) => Promise<void>;
}
