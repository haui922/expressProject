import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.render("join", { pageTitle: "Join" });
  } else {
    //
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //로그아웃기능
  res.redirect(routes.home);
};

export const user = (req, res) => res.render("user");
export const userDetail = (req, res) => res.render("userdetail");
export const editProfile = (req, res) => res.render("editprofile");
export const changePassword = (req, res) => res.render("changepassword");
