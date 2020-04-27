import routes from "../routes";
import postBlog from "../models/postBlog";

export const home = (req, res) => {
  res.render("home", { pageTitle: "HOME" });
};

export const info = (req, res) => {
  res.render("info", { pageTitle: "INFOMATION" });
};

export const travel = (req, res) => {
  res.render("travel");
};

export const course = (req, res) => {
  res.render("course");
};

export const transport = (req, res) => {
  res.render("transport", { pageTitle: "Transport" });
};

export const blog = async (req, res) => {
  try {
    const blogs = await postBlog.find({}).sort({ _id: -1 });
    res.render("blog", { pageTitle: "blog", blogs });
  } catch (error) {
    console.log(error);
    res.render("blog", { pageTitle: "blog", blogs: [] });
  }
};
