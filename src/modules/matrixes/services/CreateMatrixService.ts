import { Matrix } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { v4 as uuidv4 } from "uuid";

import IMatrixesRepository from "../repositories/IMatrixesRepository";
import IHashProvider from "@shared/container/providers/HashProvider/models/IHashProvider";

interface ICreateMatrixRequest {
  name: string;
  emailAddress: string;
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

  public async execute(matrix: Matrix): Promise<Matrix> {
    const userEmailAlreadyExists = await this.matrixesRepository.findByEmail(
      matrix.emailAddress
    );

    const userPhoneNumberAlreadyExists =
      await this.matrixesRepository.findByPhoneNumber(matrix.phoneNumber);

    const userNameAlreadyExists = await this.matrixesRepository.findByName(
      matrix.name
    );

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

    const hashedPassword = await this.hashProvider.generateHash(
      matrix.password
    );

    const data: Matrix = {
      ...matrix,
      id: uuidv4(),
      password: hashedPassword,
      created_At: new Date(),
    };

    const user = await this.matrixesRepository.create(data);

    return user;
  }
}

export default CreateMatrixService;
