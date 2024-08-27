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
const database_1 = require("database");
const uuid_1 = require("uuid");
class SalesRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sale = yield database_1.prisma.sale.findUnique({
                where: { id },
                include: {
                    products: true,
                },
            });
            return sale;
        });
    }
    findByEstablishmentId(establishment_Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sales = yield database_1.prisma.sale.findMany({
                where: {
                    establishment_Id,
                },
                include: {
                    products: true,
                },
            });
            return sales;
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ establishment_Id, firstAmountPaid, firstPayment, products, secondAmountPaid, secondPayment, sellerName, totalPurchaseValue, totalSaleValue, }) {
            const newSaleData = {
                id: (0, uuid_1.v4)(),
                establishment_Id,
                firstAmountPaid,
                firstPayment,
                secondAmountPaid,
                secondPayment,
                sellerName: "dev",
                totalPurchaseValue,
                totalSaleValue,
                saleDate: new Date(),
            };
            const newSale = yield database_1.prisma.sale.create({
                data: newSaleData,
            });
            const soldProducts = products.map((product) => (Object.assign(Object.assign({}, product), { id: (0, uuid_1.v4)(), product_Id: product.product_Id, quantity: product.quantity, sale_Id: newSale.id })));
            yield database_1.prisma.soldProduct.createMany({
                data: soldProducts,
            });
            return newSale;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prisma.soldProduct.deleteMany({
                where: {
                    sale_Id: id,
                },
            });
            yield database_1.prisma.sale.delete({
                where: { id },
            });
        });
    }
}
exports.default = SalesRepository;
