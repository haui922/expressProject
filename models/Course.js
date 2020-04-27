import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
});

const Coursemodel = mongoose.model("Course", CourseSchema);
export default Coursemodel;
