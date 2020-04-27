import express from "express";
import routes from "../routes";
import {
  createcourse,
  detailcourse,
  editcourse,
  deletecourse,
} from "../controller/courseController";

const courseRouter = express.Router();

courseRouter.get(routes.createcourse, createcourse);
courseRouter.get(routes.detailcourse, detailcourse);
courseRouter.get(routes.editcourse, editcourse);
courseRouter.get(routes.deletecourse, deletecourse);
