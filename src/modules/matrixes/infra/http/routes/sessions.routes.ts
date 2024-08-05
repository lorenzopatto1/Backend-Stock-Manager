import { Router } from "express";
import SessionsController from "../controllers/SessionsController";
import { celebrate, Joi, Segments } from "celebrate";

const sessionsRouter = Router();

const sessionsController = new SessionsController();

sessionsRouter.post(
  "/login",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create
);

export default sessionsRouter;
