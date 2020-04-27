import express from "express";
import routes from "../routes";
import {
  blogDetail,
  getUpload,
  postUpload,
  getEditBlog,
  postEditBlog,
  deleteblog,
} from "../controller/blogController";
import { uploadBlog, onlyUser } from "../middlewares";

const blogRouter = express.Router();

// uploadpage router 맨끝 컨트롤러의 변수를 가져와 routes파일에 있는 경로와 연결되어 페이지가 로딩되게 함
blogRouter.get(routes.upload, onlyUser, getUpload);
blogRouter.post(routes.upload, onlyUser, uploadBlog, postUpload);

blogRouter.get(routes.blogDetail(), blogDetail);

// editpage
blogRouter.get(routes.editBlog(), onlyUser, getEditBlog);
blogRouter.post(routes.editBlog(), onlyUser, postEditBlog);

blogRouter.get(routes.deleteBlog(), onlyUser, deleteblog);

export default blogRouter;
