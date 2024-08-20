import { Product } from "@prisma/client";

export default interface IProductsRepository {
  findById: (id: string) => Promise<Product | null>;
  findByName: (name: string) => Promise<Product | null>;
  findByEstablishmentId: (establishmentId: string) => Promise<Product[]>;
  create: (product: Product) => Promise<Product>;
  update: (product: Product) => Promise<Product>;
  delete: (id: string) => Promise<void>;
}
