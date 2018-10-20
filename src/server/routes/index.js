import express from "express";
import { getHomePage } from "./home";

const BASE_PATH = "/";

const baseRouter = express.Router();
const appRouter = express.Router();

appRouter.get("/", getHomePage);

baseRouter.use(`/locale`, appRouter);

export default baseRouter;
