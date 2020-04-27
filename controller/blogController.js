import postBlog from "../models/postBlog";
import routes from "../routes";

//uploadpage 불러오는 기능하는것
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, post },
    file: { path },
  } = req;
  const newBlog = await postBlog.create({
    fileUrl: path,
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
    const blog = await postBlog.findById(id);
    res.render("blogdetail", { blog });
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
    const blog = await postBlog.findById(id);
    res.render("editblog", { pageTitle: `Edit ${blog.title}`, blog });
  } catch (error) {
    res.redirect(routes.blog);
  }
};

export const postEditBlog = async (req, res) => {
  const {
    params: { id },
    body: { title, post },
    file: { path },
  } = req;
  try {
    await Blogmodel.findOneAndUpdate({ _id: id }, { title, post }, { path });
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
    await postBlog.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.blog);
};
