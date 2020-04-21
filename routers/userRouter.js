import express from "express";
import routes from "../routes";
import {
  user,
  userDetail,
  changePassword,
  editProfile,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.user, user);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
