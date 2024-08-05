import { Matrix } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { v4 as uuidv4 } from "uuid";

import IMatrixesRepository from "../repositories/IMatrixesRepository";
import IHashProvider from "@shared/container/providers/HashProvider/models/IHashProvider";

interface ICreateMatrixRequest {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

@injectable()
class CreateMatrixService {
  constructor(
    @inject("MatrixesRepository")
    private matrixesRepository: IMatrixesRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    name,
    email,
    password,
    phoneNumber,
  }: ICreateMatrixRequest): Promise<Matrix> {
    const userEmailAlreadyExists =
      await this.matrixesRepository.findByEmail(email);
    const userPhoneNumberAlreadyExists =
      await this.matrixesRepository.findByPhoneNumber(phoneNumber);
    const userNameAlreadyExists =
      await this.matrixesRepository.findByName(name);

    if (userNameAlreadyExists) {
      throw new AppError("Já existe um usuário com este nome", 401);
    }

    if (userEmailAlreadyExists) {
      throw new AppError("Já existe um usuário com este e-mail", 401);
    }

    if (userPhoneNumberAlreadyExists) {
      throw new AppError(
        "Já existe um usuário com este número de telefone",
        401
      );
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const data: Matrix = {
      id: uuidv4(),
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      created_At: new Date(),
    };

    const user = await this.matrixesRepository.create(data);

    return user;
  }
}

export default CreateMatrixService;
