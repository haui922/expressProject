import passport from "passport";
import routes from "../routes";
import User from "../models/User";

//회원가입 기능
export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

//로그인 기능
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const user = (req, res) => res.render("user");
export const userDetail = (req, res) => res.render("userdetail");
export const editProfile = (req, res) => res.render("editprofile");
export const changePassword = (req, res) => res.render("changepassword");
