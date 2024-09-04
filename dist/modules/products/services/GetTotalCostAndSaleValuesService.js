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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GetProductsByEstablishmentIdService_1 = __importDefault(require("./GetProductsByEstablishmentIdService"));
const tsyringe_1 = require("tsyringe");
class GetTotalCostAndSaleValuesService {
    execute(establishment_Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const getProducts = tsyringe_1.container.resolve(GetProductsByEstablishmentIdService_1.default);
            const products = yield getProducts.execute(establishment_Id);
            const unityProducts = products.filter((product) => product.type !== "Mix" && product.quantity >= 0);
            const totalCost = unityProducts.reduce((acc, product) => (acc += product.purchasePrice * product.quantity), 0);
            const totalSale = unityProducts.reduce((acc, product) => (acc += product.salePrice * product.quantity), 0);
            return { totalCost, totalSale };
        });
    }
}
exports.default = GetTotalCostAndSaleValuesService;
