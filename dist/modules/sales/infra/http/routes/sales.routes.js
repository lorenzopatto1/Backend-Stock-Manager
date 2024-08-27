"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ensureMatrixAuthenticate_1 = __importDefault(require("../../../../../shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const SalesController_1 = __importDefault(require("../controllers/SalesController"));
const salesRouter = (0, express_1.Router)();
const salesController = new SalesController_1.default();
salesRouter.get("/unique/:id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().required(),
    },
}), salesController.readById);
salesRouter.get("/all/:establishment_Id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        establishment_Id: celebrate_1.Joi.string().required(),
    },
}), salesController.readByEstablishmentId);
salesRouter.post("/create", ensureMatrixAuthenticate_1.default, 
// ensureFunctionaryAuthenticate,
(0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        establishment_Id: celebrate_1.Joi.string().required(),
        totalSaleValue: celebrate_1.Joi.number().required(),
        totalPurchaseValue: celebrate_1.Joi.number().required(),
        change: celebrate_1.Joi.number().allow(null),
        balanceToPay: celebrate_1.Joi.number().allow(null),
        firstPayment: celebrate_1.Joi.string().required(),
        firstAmountPaid: celebrate_1.Joi.number().required(),
        secondPayment: celebrate_1.Joi.string().allow(null),
        secondAmountPaid: celebrate_1.Joi.number().allow(null),
        products: celebrate_1.Joi.array()
            .items(celebrate_1.Joi.object({
            product_Id: celebrate_1.Joi.string().required(),
            type: celebrate_1.Joi.string().required(),
            name: celebrate_1.Joi.string().required(),
            category: celebrate_1.Joi.string().required(),
            quantity: celebrate_1.Joi.number().required(),
            purchasePrice: celebrate_1.Joi.number().required(),
            salePrice: celebrate_1.Joi.number().required(),
            total: celebrate_1.Joi.number().required(),
        }))
            .required(),
    },
}), salesController.create);
salesRouter.delete("/delete", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
    },
}), salesController.delete);
exports.default = salesRouter;
