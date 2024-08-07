import { Router } from "express";

import matrixesRouter from "@modules/matrixes/infra/http/routes/matrixes.routes";
import matrixesSessionsRouter from "@modules/matrixes/infra/http/routes/matrixesSessions.routes";
import functionariesRouter from "@modules/functionaries/infra/http/routes/functionaries.routes";
import functionariesSessionsRouter from "@modules/functionaries/infra/http/routes/functionariesSessions.routes";
import establishmentRouter from "@modules/establishments/infra/http/routes/establishments.routes";
import productRouter from "@modules/products/infra/http/routes/products.routes";
import inOutsRouter from "@modules/inOuts/infra/http/routes/inOuts.routes";
import machineFeesRouter from "@modules/machineFees/infra/http/routes/machineFees.routes";
import matrixesRefreshTokenRouter from "@modules/matrixes/infra/http/routes/refreshToken.routes";
import functionariesRefreshTokenRouter from "@modules/functionaries/infra/http/routes/refreshToken.routes";

const routes = Router();

routes.use("/matrixes", matrixesRouter);
routes.use("/matrixes/sessions", matrixesSessionsRouter);
routes.use("/matrixes/refresh-token", matrixesRefreshTokenRouter);

routes.use("/functionaries", functionariesRouter);
routes.use("/functionaries-sessions", functionariesSessionsRouter);
routes.use("/functionaries/refresh-token", functionariesRefreshTokenRouter);

routes.use("/products", productRouter);

routes.use("/in-outs", inOutsRouter);

routes.use("/machine-fees", machineFeesRouter);

routes.use("/establishments", establishmentRouter);

export default routes;
