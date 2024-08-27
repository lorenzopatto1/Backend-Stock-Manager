import { Functionary } from "@prisma/client";

export default interface IFunctionariesRepository {
  findById: (id: string) => Promise<Functionary | null>;
  findByEmail: (email: string) => Promise<Functionary | null>;
  findByPhoneNumber: (phoneNumber: string) => Promise<Functionary | null>;
  create: (functionary: Functionary) => Promise<Functionary>;
  update: (functionary: Functionary) => Promise<Functionary>;
  delete: (id: string) => Promise<void>;
}
