import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import chatRouter from "./src/router/chatRouter.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ body: "Rapid-GPT is Running." });
});

app.use("/rapid/api/v1", chatRouter);

export default app;
