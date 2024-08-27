"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../../../../../database");
const uuid_1 = require("uuid");
class ProductsRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.prisma.product.findUnique({
                where: {
                    id,
                },
            });
            return product;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.prisma.product.findFirst({
                where: {
                    name,
                },
            });
            return product;
        });
    }
    findByEstablishmentId(establishmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield database_1.prisma.product.findMany({
                where: {
                    establishment_Id: establishmentId,
                },
            });
            return products;
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield database_1.prisma.product.create({
                data: Object.assign(Object.assign({}, product), { id: (0, uuid_1.v4)() }),
            });
            return newProduct;
        });
    }
    update(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateProduct = yield database_1.prisma.product.update({
                where: {
                    id: product.id,
                },
                data: Object.assign({}, product),
            });
            return updateProduct;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prisma.product.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = ProductsRepository;
