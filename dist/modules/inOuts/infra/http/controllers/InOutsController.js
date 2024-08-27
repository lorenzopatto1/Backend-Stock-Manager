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
const DeleteInOutService_1 = __importDefault(require("@modules/inOuts/services/DeleteInOutService"));
const GetInOutService_1 = __importDefault(require("@modules/inOuts/services/GetInOutService"));
const GetInOutsService_1 = __importDefault(require("@modules/inOuts/services/GetInOutsService"));
const RegisterInOutsService_1 = __importDefault(require("@modules/inOuts/services/RegisterInOutsService"));
const UpdateInOutService_1 = __importDefault(require("@modules/inOuts/services/UpdateInOutService"));
const class_transformer_1 = require("class-transformer");
const tsyringe_1 = require("tsyringe");
class InOutsController {
    readUnique(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const getInOut = tsyringe_1.container.resolve(GetInOutService_1.default);
            const inOut = yield getInOut.execute(id);
            return response.json((0, class_transformer_1.instanceToPlain)(inOut));
        });
    }
    readAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { establishment_Id } = request.params;
            const getInOuts = tsyringe_1.container.resolve(GetInOutsService_1.default);
            const inOuts = yield getInOuts.execute(establishment_Id);
            return response.json((0, class_transformer_1.instanceToPlain)(inOuts));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            const registerInOut = tsyringe_1.container.resolve(RegisterInOutsService_1.default);
            const newInOut = yield registerInOut.execute(data);
            return response.json((0, class_transformer_1.instanceToPlain)(newInOut));
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            const updateInOut = tsyringe_1.container.resolve(UpdateInOutService_1.default);
            const updatedInOut = yield updateInOut.execute(data);
            return response.json((0, class_transformer_1.instanceToPlain)(updatedInOut));
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const deleteInOut = tsyringe_1.container.resolve(DeleteInOutService_1.default);
            yield deleteInOut.execute(id);
            return response.json({ message: "Entrada/Saída removido com sucesso!" });
        });
    }
}
exports.default = InOutsController;
