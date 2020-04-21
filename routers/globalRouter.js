import express from "express";
import routes from "../routes";
import {
  home,
  search,
  transport,
  food,
  nightscape,
  street,
  market,
  spot,
  blog,
} from "../controller/globalController";
import {
  postLogin,
  getLogin,
  logout,
  getJoin,
  postJoin,
} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.transport, transport);
globalRouter.get(routes.food, food);
globalRouter.get(routes.nightscape, nightscape);
globalRouter.get(routes.street, street);
globalRouter.get(routes.market, market);
globalRouter.get(routes.spot, spot);
globalRouter.get(routes.blog, blog);

export default globalRouter;
