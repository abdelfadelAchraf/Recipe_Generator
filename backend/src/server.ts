import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();
connectDB();
const app: Application = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("AI Recipe Generator API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
