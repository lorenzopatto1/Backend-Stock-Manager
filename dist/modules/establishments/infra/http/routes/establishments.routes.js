"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const EstablishmentController_1 = __importDefault(require("../controllers/EstablishmentController"));
const ensureMatrixAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const establishmentRouter = (0, express_1.Router)();
const establishmentController = new EstablishmentController_1.default();
establishmentRouter.get("/:matrix_Id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        matrix_Id: celebrate_1.Joi.string().required(),
    },
}), establishmentController.read);
establishmentRouter.post("/create", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        phoneNumber: celebrate_1.Joi.string().required(),
    },
}), establishmentController.create);
establishmentRouter.put("/edit", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
        name: celebrate_1.Joi.string(),
        phoneNumber: celebrate_1.Joi.string(),
    },
}), establishmentController.update);
establishmentRouter.delete("/delete", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
    },
}), establishmentController.delete);
exports.default = establishmentRouter;
