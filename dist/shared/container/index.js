"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const MatrixesRepository_1 = __importDefault(require("../../modules/matrixes/infra/http/prisma/repositories/MatrixesRepository"));
const BCryptHashProvider_1 = __importDefault(require("./providers/HashProvider/implementations/BCryptHashProvider"));
const MatrixesRefreshTokenRepository_1 = __importDefault(require("../../modules/matrixes/infra/http/prisma/repositories/MatrixesRefreshTokenRepository"));
const GenerateMatrixesTokenProvider_1 = __importDefault(require("../../modules/matrixes/providers/GenerateMatrixesTokenProvider/implementations/GenerateMatrixesTokenProvider"));
const EstablishmentsRepository_1 = __importDefault(require("../../modules/establishments/infra/http/prisma/repositories/EstablishmentsRepository"));
const ProductsRepository_1 = __importDefault(require("../../modules/products/infra/http/prisma/repositories/ProductsRepository"));
const inOutsRepository_1 = __importDefault(require("../../modules/inOuts/infra/http/prisma/repositories/inOutsRepository"));
const MachineFeesRepository_1 = __importDefault(require("../../modules/machineFees/infra/http/prisma/repositories/MachineFeesRepository"));
const GenerateFunctionariesTokenProvider_1 = __importDefault(require("../../modules/functionaries/providers/GenerateFunctionariesTokenProvider/implementations/GenerateFunctionariesTokenProvider"));
const FunctionariesRefreshTokenRepository_1 = __importDefault(require("../../modules/functionaries/infra/http/prisma/repositories/FunctionariesRefreshTokenRepository"));
const FunctionariesRepository_1 = __importDefault(require("../../modules/functionaries/infra/http/prisma/repositories/FunctionariesRepository"));
const SalesRepository_1 = __importDefault(require("../../modules/sales/infra/http/prisma/repositories/SalesRepository"));
tsyringe_1.container.registerSingleton("MatrixesRepository", MatrixesRepository_1.default);
tsyringe_1.container.registerSingleton("MatrixesRefreshTokenRepository", MatrixesRefreshTokenRepository_1.default);
tsyringe_1.container.registerSingleton("GenerateMatrixesTokenProvider", GenerateMatrixesTokenProvider_1.default);
tsyringe_1.container.registerSingleton("FunctionariesRepository", FunctionariesRepository_1.default);
tsyringe_1.container.registerSingleton("GenerateFunctionariesTokenProvider", GenerateFunctionariesTokenProvider_1.default);
tsyringe_1.container.registerSingleton("FunctionariesRefreshTokenRepository", FunctionariesRefreshTokenRepository_1.default);
tsyringe_1.container.registerSingleton("EstablishmentRepository", EstablishmentsRepository_1.default);
tsyringe_1.container.registerSingleton("ProductsRepository", ProductsRepository_1.default);
tsyringe_1.container.registerSingleton("InOutsRepository", inOutsRepository_1.default);
tsyringe_1.container.registerSingleton("MachineFeesRepository", MachineFeesRepository_1.default);
tsyringe_1.container.registerSingleton("SalesRepository", SalesRepository_1.default);
tsyringe_1.container.registerSingleton("HashProvider", BCryptHashProvider_1.default);
