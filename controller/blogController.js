import Blogmodel from "../models/postBlog";
import routes from "../routes";

//uploadpage 불러오는 기능하는것
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, post },
    file: { path },
  } = req;
  const newBlog = await Blogmodel.create({
    img: path,
    title,
    post,
  });
  res.redirect(routes.blogDetail(newBlog.id));
};

//detailpage에서 저장된 파일의 id를 불러와 파일의 내용이 보이게 함
export const blogDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const blog = await Blogmodel.findById(id);
    res.render("blogdetail", { pageTitle: blog.title, blog });
  } catch (error) {
    console.log(error);
    res.redirect(routes.blog);
  }
};

//Edit(get,post)
export const getEditBlog = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const blog = await Blogmodel.findById(id);
    res.render("editblog", { pageTitle: `Edit ${blog.title}`, blog });
  } catch (error) {
    res.redirect(routes.blog);
  }
  res.render("editblog", { pageTitle: "Edit" });
};

export const postEditBlog = async (req, res) => {
  const {
    params: { id },
    body: { title, post },
  } = req;
  try {
    await Blogmodel.findOneAndUpdate({ _id: id }, { title, post });
    res.redirect(routes.blogDetail(id));
  } catch (error) {
    res.redirect(routes.blog);
  }
};

//delete
export const deleteblog = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Blogmodel.findOneAndRemove({ _id: id });
    res.redirect(routes.blog);
  } catch (error) {
    res.redirect(routes.blog);
  }
};
