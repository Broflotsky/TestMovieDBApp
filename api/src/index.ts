import express from "express";
import { router } from "./routes";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.json()); // Transform req.body to json Middleware
app.use(cors());
app.options("*", cors());
app.use(router);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running into ${PORT}`);
});
