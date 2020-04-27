import express from "express";
import routes from "../routes";
import {
  home,
  transport,
  blog,
  course,
  travel,
  info,
} from "../controller/globalController";
import {
  postLogin,
  getLogin,
  logout,
  getJoin,
  postJoin,
} from "../controller/userController";
import { onlyPublic, onlyUser } from "../middlewares";

const globalRouter = express.Router();

//ABOUT USER
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyUser, logout);

//HOME
globalRouter.get(routes.home, home);
globalRouter.get(routes.info, info);

//HEADER MENU
globalRouter.get(routes.travel, travel);
globalRouter.get(routes.transport, transport);
globalRouter.get(routes.course, course);
globalRouter.get(routes.blog, blog);

export default globalRouter;
