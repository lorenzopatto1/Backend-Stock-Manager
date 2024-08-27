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
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const tsyringe_1 = require("tsyringe");
let UpdateMatrixService = class UpdateMatrixService {
    constructor(matrixesRepository, hashProvider) {
        this.matrixesRepository = matrixesRepository;
        this.hashProvider = hashProvider;
    }
    execute(matrix) {
        return __awaiter(this, void 0, void 0, function* () {
            const matrixExists = yield this.matrixesRepository.findById(matrix.id);
            if (!matrixExists) {
                throw new AppError_1.default("Faça login para editar informações", 401);
            }
            const matrixesEquals = matrix.name === matrixExists.name &&
                matrix.emailAddress === matrixExists.emailAddress &&
                matrix.phoneNumber === matrixExists.phoneNumber &&
                (yield this.hashProvider.compareHash(matrix.password, matrixExists.password));
            if (matrixesEquals) {
                throw new AppError_1.default("Os dados continuam iguais", 401);
            }
            const hashedPassword = matrix.password &&
                (yield this.hashProvider.generateHash(matrix.password));
            const updatedMatrix = yield this.matrixesRepository.update(Object.assign(Object.assign({}, matrix), { password: hashedPassword }));
            return { updatedMatrix };
        });
    }
};
UpdateMatrixService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("MatrixesRepository")),
    __param(1, (0, tsyringe_1.inject)("HashProvider")),
    __metadata("design:paramtypes", [Object, Object])
], UpdateMatrixService);
exports.default = UpdateMatrixService;
