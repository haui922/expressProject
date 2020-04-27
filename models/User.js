import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  AvatarUrl: String,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const Usermodel = mongoose.model("User", UserSchema);

export default Usermodel;
