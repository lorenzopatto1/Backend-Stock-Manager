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
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
let RegisterProductService = class RegisterProductService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    execute(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productExists = yield this.productsRepository.findByName(product.name);
            if (product.type !== client_1.ProductEnum.Unity &&
                product.type !== client_1.ProductEnum.Mix) {
                throw new AppError_1.default("O tipo deve ser (Unidade/Mix)");
            }
            if (productExists) {
                throw new AppError_1.default("Já existe um produto com esse nome");
            }
            const newProduct = yield this.productsRepository.create(product);
            return newProduct;
        });
    }
};
RegisterProductService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("ProductsRepository")),
    __metadata("design:paramtypes", [Object])
], RegisterProductService);
exports.default = RegisterProductService;
