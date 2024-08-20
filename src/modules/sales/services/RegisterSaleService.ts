import { container, inject, injectable } from "tsyringe";
import ISalesRepository from "../repositories/ISalesRepository";
import { SoldProduct, Sale } from "@prisma/client";
import IEstablishmentsRepository from "@modules/establishments/infra/repositories/IEstablishmentsRepository";
import AppError from "@shared/errors/AppError";
import IProductsRepository from "@modules/products/repositories/IProductsRepository";

export interface ISaleData extends Sale {
  products: SoldProduct[];
}

@injectable()
class RegisterSaleService {
  constructor(
    @inject("SalesRepository")
    private salesRepository: ISalesRepository,

    @inject("EstablishmentRepository")
    private establishemntsRepository: IEstablishmentsRepository
  ) {}

  public async execute(data: ISaleData): Promise<Sale> {
    const establishmentExists = await this.establishemntsRepository.findById(
      data.establishment_Id
    );

    if (!establishmentExists) {
      throw (
        (new AppError("Não encontramos seu estabelecimento, tente novamente"),
        401)
      );
    }
    const newSale = await this.salesRepository.create(data);

    return newSale;
  }
}

export default RegisterSaleService;
