import "./db";
import dotenv from "dotenv";
import app from "./app";
import "./models/postBlog";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT || 1000;

// eslint-disable-next-line no-console
const handleListening = () => console.log(`✔ http://localhost:${PORT} ✔`);

app.listen(PORT, handleListening);
