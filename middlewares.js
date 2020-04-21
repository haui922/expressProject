import multer from "multer";
import routes from "./routes";

const multerBlog = multer({ dest: "uploads/blog/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Alleys";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: FALSE,
    id: 1,
  };
  next();
};

export const uploadBlog = multerBlog.single("blogFile");
