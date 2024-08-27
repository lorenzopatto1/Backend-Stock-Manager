import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import MatrixRefreshTokenController from "../controllers/MatrixRefreshTokenController";

const matrixesRefreshTokenRouter = Router();

const matrixRefreshTokenController = new MatrixRefreshTokenController();

matrixesRefreshTokenRouter.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      refreshToken: Joi.string().required(),
    },
  }),
  matrixRefreshTokenController.create
);

export default matrixesRefreshTokenRouter;
