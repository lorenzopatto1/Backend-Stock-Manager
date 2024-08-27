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
const CreateEstablishmentService_1 = __importDefault(require("../../../../establishments/services/CreateEstablishmentService"));
const DeleteEstablishmentService_1 = __importDefault(require("../../../../establishments/services/DeleteEstablishmentService"));
const GetEstablishmentService_1 = __importDefault(require("../../../../establishments/services/GetEstablishmentService"));
const UpdateEstablishmentService_1 = __importDefault(require("../../../../establishments/services/UpdateEstablishmentService"));
const class_transformer_1 = require("class-transformer");
const tsyringe_1 = require("tsyringe");
class EstablishmentController {
    read(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { matrix_Id } = request.params;
            const getEstablishment = tsyringe_1.container.resolve(GetEstablishmentService_1.default);
            const establishments = yield getEstablishment.execute(matrix_Id);
            return response.json((0, class_transformer_1.instanceToPlain)(establishments));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishment = request.body;
            const { id } = request.matrix;
            const newEstablishmentData = Object.assign(Object.assign({}, establishment), { matrix_Id: id });
            const createEstablishment = tsyringe_1.container.resolve(CreateEstablishmentService_1.default);
            const newEstablishment = yield createEstablishment.execute(newEstablishmentData);
            return response.json((0, class_transformer_1.instanceToPlain)(newEstablishment));
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishment = request.body;
            const updateEstablishment = tsyringe_1.container.resolve(UpdateEstablishmentService_1.default);
            const updatedEstablishment = yield updateEstablishment.execute(establishment);
            return response.json((0, class_transformer_1.instanceToPlain)(updatedEstablishment));
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const updateEstablishment = tsyringe_1.container.resolve(DeleteEstablishmentService_1.default);
            yield updateEstablishment.execute(id);
            return response.json({ message: "Deletado com sucesso!" });
        });
    }
}
exports.default = EstablishmentController;
