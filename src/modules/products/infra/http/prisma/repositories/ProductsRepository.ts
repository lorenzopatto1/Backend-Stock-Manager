import { Prisma, Product } from "@prisma/client";
import { prisma } from "database";
import { v4 as uuidv4 } from "uuid";

import IProductsRepository from "@modules/products/infra/repositories/IProductsRepository";

class ProductsRepository implements IProductsRepository {
  public async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return product;
  }

  public async findByName(name: string): Promise<Product | null> {
    const product = await prisma.product.findFirst({
      where: {
        name,
      },
    });
    return product;
  }

  public async findByEstablishmentId(
    establishmentId: string
  ): Promise<Product[]> {
    const products = await prisma.product.findMany({
      where: {
        establishment_Id: establishmentId,
      },
    });

    return products;
  }

  public async create(product: Product): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: {
        ...product,
        id: uuidv4(),
      },
    });
    return newProduct;
  }

  public async update(product: Product): Promise<Product> {
    const updateProduct = await prisma.product.update({
      where: {
        id: product.id,
      },
      data: {
        ...product,
      },
    });

    return updateProduct;
  }

  public async delete(id: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}

export default ProductsRepository;
