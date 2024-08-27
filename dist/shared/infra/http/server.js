"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("express-async-errors");
const celebrate_1 = require("celebrate");
require("es6-shim");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const routes_1 = __importDefault(require("./routes"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const cors_1 = __importDefault(require("cors"));
require("../../container");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://pdvgestaofacil.com.br"],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
const port = process.env.APP_PORT || 3333;
app.use((err, request, response, _) => {
    if (err instanceof AppError_1.default) {
        return response
            .status(err.statusCode)
            .json({ status: "error", message: err.message });
    }
    return response.status(500).json({ status: "error", messsage: err.message });
});
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
