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
const uuid_1 = require("uuid");
const client_1 = require("@prisma/client");
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
let RegisterInOutsService = class RegisterInOutsService {
    constructor(inOutsRepository) {
        this.inOutsRepository = inOutsRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const inOutAlreadyExists = yield this.inOutsRepository.findByEstablishmentId(data.establishment_Id);
            if (data.type !== client_1.InOutEnum.In && data.type !== client_1.InOutEnum.Out) {
                throw new AppError_1.default("O tipo deve ser (Entrada/Saida)");
            }
            inOutAlreadyExists.forEach((inOut) => {
                if (inOut.description === data.description)
                    throw new AppError_1.default(`Você ja tem uma ${data.type === "In" ? "entrada" : "saída"} com essa descrição`);
            });
            const newInOut = yield this.inOutsRepository.create(Object.assign(Object.assign({}, data), { id: (0, uuid_1.v4)() }));
            return newInOut;
        });
    }
};
RegisterInOutsService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("InOutsRepository")),
    __metadata("design:paramtypes", [Object])
], RegisterInOutsService);
exports.default = RegisterInOutsService;
