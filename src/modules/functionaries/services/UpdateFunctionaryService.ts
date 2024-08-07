import { inject, injectable } from "tsyringe";
import { Functionary } from "@prisma/client";
import AppError from "@shared/errors/AppError";
import IHashProvider from "@shared/container/providers/HashProvider/models/IHashProvider";
import IFunctionariesRepository from "../repositories/IFunctionariesRepository";

@injectable()
class UpdateFunctionaryService {
  constructor(
    @inject("FunctionariesRepository")
    private functionariesRepository: IFunctionariesRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}
  async execute(functionary: Functionary) {
    const functionaryExists = await this.functionariesRepository.findById(
      functionary.id
    );

    if (!functionaryExists) {
      throw new AppError("Faça login para editar informações", 401);
    }

    const passwordEquals = await this.hashProvider.compareHash(
      functionary.password,
      functionaryExists.password
    );

    const functionariesEquals =
      functionary.emailAddress === functionaryExists.name &&
      functionary.emailAddress === functionaryExists.emailAddress &&
      functionary.phoneNumber === functionaryExists.phoneNumber &&
      passwordEquals;

    if (functionariesEquals) {
      throw new AppError("Os dados continuam iguais", 401);
    }
    const hashedPassword = await this.hashProvider.generateHash(
      functionary.password
    );

    const updatedFunctionary = await this.functionariesRepository.update({
      ...functionary,
      password: hashedPassword,
    });

    return { updatedFunctionary };
  }
}

export default UpdateFunctionaryService;
