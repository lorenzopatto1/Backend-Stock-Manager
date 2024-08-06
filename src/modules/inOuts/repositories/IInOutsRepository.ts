import { InOut } from "@prisma/client";

export default interface IInOutsRepository {
  findById(id: string): Promise<InOut | null>;
  findByEstablishmentId(establishmentId: string): Promise<InOut[]>;
  create(data: InOut): Promise<InOut>;
  update(data: InOut): Promise<InOut>;
  delete(id: string): Promise<void>;
}
