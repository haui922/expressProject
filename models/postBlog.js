import mongoose from "mongoose";

const postBlogSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  post: {
    type: String,
    required: "Text is required",
  },
  veiws: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("postBlog", postBlogSchema);

export default model;
