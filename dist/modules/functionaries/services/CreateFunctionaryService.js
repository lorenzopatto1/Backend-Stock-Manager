"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const uuid_1 = require("uuid");
let CreateFunctionaryService = class CreateFunctionaryService {
    constructor(functionariesRepository, hashProvider) {
        this.functionariesRepository = functionariesRepository;
        this.hashProvider = hashProvider;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEmailAlreadyExists = yield this.functionariesRepository.findByEmail(data.emailAddress);
            const userPhoneNumberAlreadyExists = yield this.functionariesRepository.findByPhoneNumber(data.phoneNumber);
            if (userEmailAlreadyExists) {
                throw new AppError_1.default("Já existe um usuário com este e-mail", 401);
            }
            if (userPhoneNumberAlreadyExists) {
                throw new AppError_1.default("Já existe um usuário com este número de telefone", 401);
            }
            const genderEnum = Object.keys(client_1.$Enums.GenderEnum);
            if (!genderEnum.includes(data.gender)) {
                throw new AppError_1.default("O gênero só aceita: Homem, Mulher ou Outros");
            }
            const hashedPassword = yield this.hashProvider.generateHash(data.password);
            const newFunctionary = Object.assign(Object.assign({}, data), { id: (0, uuid_1.v4)(), password: hashedPassword });
            const functionary = yield this.functionariesRepository.create(newFunctionary);
            return functionary;
        });
    }
};
CreateFunctionaryService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("FunctionariesRepository")),
    __param(1, (0, tsyringe_1.inject)("HashProvider")),
    __metadata("design:paramtypes", [Object, Object])
], CreateFunctionaryService);
exports.default = CreateFunctionaryService;
