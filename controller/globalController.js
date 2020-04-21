import routes from "../routes";
import Blogmodel from "../models/postBlog";

export const home = (req, res) => {
  res.render("home", { pageTitle: "HOME" });
};

export const search = (req, res) => {
  res.render("search", { pageTitle: "Search" });
};

export const transport = (req, res) => {
  res.render("transport", { pageTitle: "Transport" });
};

export const food = (req, res) => {
  res.render("food", { pageTitle: "Food" });
};

export const market = (req, res) => {
  res.render("market", { pageTitle: "Market" });
};

export const nightscape = (req, res) => {
  res.render("nightscape", { pageTitle: "Nightscape" });
};
export const street = (req, res) => {
  res.render("street", { pageTitle: "Street" });
};

export const spot = (req, res) => {
  res.render("spot", { pageTitle: "Spot" });
};

export const blog = async (req, res) => {
  try {
    const Uploadblog = await Blogmodel.find({});
    res.render("blog", { pageTitle: "blog", Uploadblog });
  } catch (error) {
    console.log(error);
    res.render("blog", { pageTitle: "blog", Uploadblog: [] });
  }
};
