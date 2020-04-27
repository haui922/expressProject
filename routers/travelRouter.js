import express from "express";
import routes from "../routes";
import {
  food,
  nightscape,
  street,
  market,
  spot,
} from "../controller/travelController";

const travelRouter = express.Router();

travelRouter.get(routes.food, food);
travelRouter.get(routes.nightscape, nightscape);
travelRouter.get(routes.street, street);
travelRouter.get(routes.market, market);
travelRouter.get(routes.spot, spot);

export default travelRouter;
