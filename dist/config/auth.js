"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    matrixJwt: {
        secret: process.env.MATRIX_SECRET || "default",
        expiresIn: "7d",
    },
    functionaryJwt: {
        secret: process.env.FUNCTIONARY_SECRET || "default",
        expiresIn: "7d",
    },
};
