import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import FunctionarySessionsController from "../controllers/FunctionarySessionsController";

const functionariesRefreshTokenRouter = Router();

const functionaryRefreshTokenController = new FunctionarySessionsController();

functionariesRefreshTokenRouter.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      refreshToken: Joi.string().required(),
    },
  }),
  functionaryRefreshTokenController.create
);

export default functionariesRefreshTokenRouter;
