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
const tsyringe_1 = require("tsyringe");
const GetProductsByEstablishmentIdService_1 = __importDefault(require("../../../../products/services/GetProductsByEstablishmentIdService"));
const class_transformer_1 = require("class-transformer");
const RegisterProductService_1 = __importDefault(require("../../../../products/services/RegisterProductService"));
const UpdateProductService_1 = __importDefault(require("../../../../products/services/UpdateProductService"));
const DeleteProductService_1 = __importDefault(require("../../../../products/services/DeleteProductService"));
const GetProductById_1 = __importDefault(require("../../../../products/services/GetProductById"));
class ProductsController {
    readUnique(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const getProduct = tsyringe_1.container.resolve(GetProductById_1.default);
            const product = yield getProduct.execute(id);
            return response.json((0, class_transformer_1.instanceToPlain)(product));
        });
    }
    readAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { establishment_Id } = request.params;
            const getProducts = tsyringe_1.container.resolve(GetProductsByEstablishmentIdService_1.default);
            const products = yield getProducts.execute(establishment_Id);
            return response.json((0, class_transformer_1.instanceToPlain)(products));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = request.body;
            const createProduct = tsyringe_1.container.resolve(RegisterProductService_1.default);
            const newProduct = yield createProduct.execute(product);
            return response.json((0, class_transformer_1.instanceToPlain)(newProduct));
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = request.body;
            const updateProduct = tsyringe_1.container.resolve(UpdateProductService_1.default);
            const updatedProduct = yield updateProduct.execute(product);
            return response.json((0, class_transformer_1.instanceToPlain)(updatedProduct));
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const deleteProduct = tsyringe_1.container.resolve(DeleteProductService_1.default);
            yield deleteProduct.execute(id);
            return response.json({ message: "Produto removido com sucesso!" });
        });
    }
}
exports.default = ProductsController;
