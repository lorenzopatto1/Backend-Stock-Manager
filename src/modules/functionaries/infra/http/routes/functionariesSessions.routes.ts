import { Router } from "express";
import FunctionariesSessionsController from "../controllers/FunctionariesSessionsController";
import { celebrate, Joi, Segments } from "celebrate";

const functionariesSessionsRouter = Router();

const functionariesSessionsController = new FunctionariesSessionsController();

functionariesSessionsRouter.post(
  "/login",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  functionariesSessionsController.create
);

export default functionariesSessionsRouter;
