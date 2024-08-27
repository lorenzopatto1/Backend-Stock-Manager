"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ensureMatrixAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const CategorysController_1 = __importDefault(require("../controllers/CategorysController"));
const categoryRouter = (0, express_1.Router)();
const categorysController = new CategorysController_1.default();
categoryRouter.get("/:establishment_Id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        establishment_Id: celebrate_1.Joi.string().required(),
    },
}), categorysController.read);
exports.default = categoryRouter;
