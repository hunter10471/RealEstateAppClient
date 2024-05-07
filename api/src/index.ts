import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});