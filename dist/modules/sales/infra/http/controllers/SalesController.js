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
const DeleteSaleService_1 = __importDefault(require("@modules/sales/services/DeleteSaleService"));
const FindSaleByIdService_1 = __importDefault(require("@modules/sales/services/FindSaleByIdService"));
const FindSalesByEstablishmentIdService_1 = __importDefault(require("@modules/sales/services/FindSalesByEstablishmentIdService"));
const RegisterSaleService_1 = __importDefault(require("@modules/sales/services/RegisterSaleService"));
const class_transformer_1 = require("class-transformer");
const tsyringe_1 = require("tsyringe");
class SalesController {
    readById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const findSale = tsyringe_1.container.resolve(FindSaleByIdService_1.default);
            const sale = yield findSale.execute(id);
            return response.json((0, class_transformer_1.instanceToPlain)(sale));
        });
    }
    readByEstablishmentId(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { establishment_Id } = request.params;
            const findSale = tsyringe_1.container.resolve(FindSalesByEstablishmentIdService_1.default);
            const sale = yield findSale.execute(establishment_Id);
            return response.json((0, class_transformer_1.instanceToPlain)(sale));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            const registerSale = tsyringe_1.container.resolve(RegisterSaleService_1.default);
            const newSale = yield registerSale.execute(data);
            return response.json((0, class_transformer_1.instanceToPlain)(newSale));
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const deleteSale = tsyringe_1.container.resolve(DeleteSaleService_1.default);
            yield deleteSale.execute(id);
            return response.json({
                error: false,
                message: "Venda removida com sucesso!",
            });
        });
    }
}
exports.default = SalesController;
