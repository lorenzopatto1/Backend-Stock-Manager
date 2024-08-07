import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import MatrixesController from "../controllers/MatrixesController";

const matrixesRouter = Router();
const matrixesController = new MatrixesController();

matrixesRouter.get(
  "/",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  }),
  matrixesController.read
);

matrixesRouter.post(
  "/register",

  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      emailAddress: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  matrixesController.create
);

matrixesRouter.put(
  "/edit",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      emailAddress: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  matrixesController.update
);

export default matrixesRouter;
