import { inject, injectable } from "tsyringe";
import { $Enums, Functionary } from "@prisma/client";
import AppError from "@shared/errors/AppError";
import { v4 as uuidv4 } from "uuid";

import IHashProvider from "@shared/container/providers/HashProvider/models/IHashProvider";
import IFunctionariesRepository from "../repositories/IFunctionariesRepository";

interface ICreateFunctionaryRequest {
  establishment_Id: string;
  type: string;
  name: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  gender: $Enums.GenderEnum;
  document: string;
}

@injectable()
class CreateFunctionaryService {
  constructor(
    @inject("FunctionariesRepository")
    private functionariesRepository: IFunctionariesRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute(data: ICreateFunctionaryRequest): Promise<Functionary> {
    const userEmailAlreadyExists =
      await this.functionariesRepository.findByEmail(data.emailAddress);
    const userPhoneNumberAlreadyExists =
      await this.functionariesRepository.findByPhoneNumber(data.phoneNumber);

    if (userEmailAlreadyExists) {
      throw new AppError("Já existe um usuário com este e-mail", 401);
    }

    if (userPhoneNumberAlreadyExists) {
      throw new AppError(
        "Já existe um usuário com este número de telefone",
        401
      );
    }

    const genderEnum = Object.keys($Enums.GenderEnum);

    if (!genderEnum.includes(data.gender)) {
      throw new AppError("O gênero só aceita: Homem, Mulher ou Outros");
    }

    const hashedPassword = await this.hashProvider.generateHash(data.password);

    const newFunctionary: Functionary = {
      ...data,
      id: uuidv4(),
      password: hashedPassword,
    };

    const functionary =
      await this.functionariesRepository.create(newFunctionary);

    return functionary;
  }
}

export default CreateFunctionaryService;
