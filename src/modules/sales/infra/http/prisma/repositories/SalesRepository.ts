import { prisma } from "database";
import { Sale } from "@prisma/client";

import { v4 as uuidv4 } from "uuid";

import ISalesRepository from "@modules/sales/repositories/ISalesRepository";
import { ISaleData } from "@modules/sales/services/RegisterSaleService";

class SalesRepository implements ISalesRepository {
  public async findById(id: string): Promise<Sale | null> {
    const sale = await prisma.sale.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });

    return sale;
  }
  public async findByEstablishmentId(
    establishment_Id: string
  ): Promise<Sale[]> {
    const sales = await prisma.sale.findMany({
      where: {
        establishment_Id,
      },
      include: {
        products: true,
      },
    });

    return sales;
  }
  public async create({
    establishment_Id,
    firstAmountPaid,
    firstPayment,
    products,
    secondAmountPaid,
    secondPayment,
    sellerName,
    totalPurchaseValue,
    totalSaleValue,
  }: ISaleData): Promise<Sale> {
    const newSaleData = {
      id: uuidv4(),
      establishment_Id,
      firstAmountPaid,
      firstPayment,
      secondAmountPaid,
      secondPayment,
      sellerName: "dev",
      totalPurchaseValue,
      totalSaleValue,
      saleDate: new Date(),
    };
    const newSale = await prisma.sale.create({
      data: newSaleData,
    });

    const soldProducts = products.map((product) => ({
      ...product,
      id: uuidv4(),
      product_Id: product.product_Id,
      quantity: product.quantity,
      sale_Id: newSale.id,
    }));

    await prisma.soldProduct.createMany({
      data: soldProducts,
    });

    return newSale;
  }
  public async delete(id: string): Promise<void> {
    await prisma.soldProduct.deleteMany({
      where: {
        sale_Id: id,
      },
    });
    await prisma.sale.delete({
      where: { id },
    });
  }
}

export default SalesRepository;
