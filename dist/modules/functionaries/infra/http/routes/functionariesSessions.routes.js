"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FunctionariesSessionsController_1 = __importDefault(require("../controllers/FunctionariesSessionsController"));
const celebrate_1 = require("celebrate");
const functionariesSessionsRouter = (0, express_1.Router)();
const functionariesSessionsController = new FunctionariesSessionsController_1.default();
functionariesSessionsRouter.post("/login", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        email: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().required(),
    },
}), functionariesSessionsController.create);
exports.default = functionariesSessionsRouter;
