import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/postBlog";
import "./models/Comment";
import "./models/Course";
import "./models/User";

const PORT = process.env.PORT || 1000;

// eslint-disable-next-line no-console
const handleListening = () => console.log(`✔ http://localhost:${PORT} ✔`);

app.listen(PORT, handleListening);
