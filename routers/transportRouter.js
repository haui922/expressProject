import express from "express";
import routes from "../routes";
import { bus, metro, taxi, moretrans } from "../controller/transController";

const transportRouter = express.Router();

transportRouter.get(routes.bus, bus);
transportRouter.get(routes.metro, metro);
transportRouter.get(routes.taxi, taxi);
transportRouter.get(routes.moretrans, moretrans);

export default transportRouter;
