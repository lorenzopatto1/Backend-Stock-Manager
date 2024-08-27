"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const FunctionarySessionsController_1 = __importDefault(require("../controllers/FunctionarySessionsController"));
const functionariesRefreshTokenRouter = (0, express_1.Router)();
const functionaryRefreshTokenController = new FunctionarySessionsController_1.default();
functionariesRefreshTokenRouter.post("/create", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        refreshToken: celebrate_1.Joi.string().required(),
    },
}), functionaryRefreshTokenController.create);
exports.default = functionariesRefreshTokenRouter;
