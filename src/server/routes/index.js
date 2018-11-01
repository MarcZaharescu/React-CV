import express from "express";
import { postSendEmailPage } from "./sendEmail";

const BASE_PATH = "/";

const baseRouter = express.Router();
const appRouter = express.Router();

appRouter.post("/", postSendEmailPage);

baseRouter.use(`/mail`, appRouter);

export default baseRouter;
