import express from "express";
import routes from "../routes";
import {
  user,
  userDetail,
  changePassword,
  editProfile,
} from "../controller/userController";
import { onlyUser } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.user, onlyUser, user);
userRouter.get(routes.editProfile, onlyUser, editProfile);
userRouter.get(routes.changePassword, onlyUser, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
