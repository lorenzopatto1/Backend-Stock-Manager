import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import SessionsController from "../controllers/MatrixSessionsController";

const matrixesSessionsRouter = Router();

const sessionsController = new SessionsController();

matrixesSessionsRouter.post(
  "/login",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create
);

export default matrixesSessionsRouter;
