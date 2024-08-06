import { Router } from "express";
import InOutsController from "../controllers/InOutsController";
import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import { celebrate, Joi, Segments } from "celebrate";

const inOutsRouter = Router();

const inOutsController = new InOutsController();

inOutsRouter.get(
  "/unique",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  }),
  inOutsController.readUnique
);

inOutsRouter.get(
  "/all",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishmentId: Joi.string().required(),
    },
  }),
  inOutsController.readAll
);

inOutsRouter.post(
  "/register",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishment_Id: Joi.string().required(),
      type: Joi.string().required(),
      value: Joi.number().required(),
      date: Joi.date(),
      description: Joi.string().required(),
    },
  }),
  inOutsController.create
);

inOutsRouter.put(
  "/update",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      type: Joi.string(),
      value: Joi.number(),
      date: Joi.date(),
      description: Joi.string(),
    },
  }),
  inOutsController.update
);

inOutsRouter.delete(
  "/delete",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  }),
  inOutsController.delete
);

export default inOutsRouter;
