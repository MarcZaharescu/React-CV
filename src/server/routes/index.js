import express from "express";
import { getSendEmailPage } from "./sendEmail";

const BASE_PATH = "/";

const baseRouter = express.Router();
const appRouter = express.Router();

appRouter.get("/", getSendEmailPage);

baseRouter.use(`/mail`, appRouter);

export default baseRouter;
