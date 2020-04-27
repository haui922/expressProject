import multer from "multer";
import routes from "./routes";

const multerBlog = multer({ dest: "uploads/blog/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Alleys";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.login);
  }
};

export const uploadBlog = multerBlog.single("blogFile");
