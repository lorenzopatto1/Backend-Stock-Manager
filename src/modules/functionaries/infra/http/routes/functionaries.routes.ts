import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import FunctionariesController from "../controllers/FunctionariesController";
import ensureFunctionaryAuthenticate from "@shared/infra/http/middlewares/ensureFunctionaryAuthenticate";

const functionariesRouter = Router();
const functionariesController = new FunctionariesController();

functionariesRouter.get(
  "/:id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  functionariesController.read
);

functionariesRouter.post(
  "/register",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishment_Id: Joi.string().required(),
      type: Joi.string().required(),
      name: Joi.string().required(),
      emailAddress: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      password: Joi.string().required(),
      gender: Joi.string().required(),
      document: Joi.string().required(),
    },
  }),
  functionariesController.create
);

functionariesRouter.put(
  "/edit",
  ensureMatrixAuthenticate,
  ensureFunctionaryAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      type: Joi.string(),
      name: Joi.string(),
      emailAddress: Joi.string(),
      phoneNumber: Joi.string(),
      password: Joi.string(),
      gender: Joi.string(),
      document: Joi.string(),
    },
  }),
  functionariesController.update
);

functionariesRouter.delete(
  "/delete",
  ensureMatrixAuthenticate,
  ensureFunctionaryAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  })
);

export default functionariesRouter;
