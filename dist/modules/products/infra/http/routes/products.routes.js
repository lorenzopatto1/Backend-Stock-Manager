"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const ensureMatrixAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const express_1 = require("express");
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const productRouter = (0, express_1.Router)();
const productsController = new ProductsController_1.default();
productRouter.get("/unique/:id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().required(),
    },
}), productsController.readUnique);
productRouter.get("/all/:establishment_Id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        establishment_Id: celebrate_1.Joi.string().required(),
    },
}), productsController.readAll);
productRouter.post("/register", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        establishment_Id: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string().required(),
        name: celebrate_1.Joi.string().required(),
        quantity: celebrate_1.Joi.number().required(),
        purchasePrice: celebrate_1.Joi.number().required(),
        salePrice: celebrate_1.Joi.number().required(),
        wholesaleMinimalQuantity: celebrate_1.Joi.number().allow(null),
        wholesaleUnityPrice: celebrate_1.Joi.number().allow(null),
        validationDate: celebrate_1.Joi.date().allow(null),
        category: celebrate_1.Joi.string().required(),
    },
}), productsController.create);
productRouter.put("/update", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string(),
        name: celebrate_1.Joi.string(),
        quantity: celebrate_1.Joi.number(),
        purchasePrice: celebrate_1.Joi.number(),
        salePrice: celebrate_1.Joi.number(),
        wholesaleMinimalQuantity: celebrate_1.Joi.number().allow(null),
        wholesaleUnityPrice: celebrate_1.Joi.number().allow(null),
        validationDate: celebrate_1.Joi.date().allow(null),
        category: celebrate_1.Joi.string(),
    },
}), productsController.update);
productRouter.delete("/delete/:id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().required(),
    },
}), productsController.delete);
exports.default = productRouter;
