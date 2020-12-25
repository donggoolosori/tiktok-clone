import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import TikTok from "./models/TikTok.js";
import cors from "cors";
const connection_url =
  "mongodb+srv://admin:TKxxzZU0OfltW9md@cluster0.btcwz.mongodb.net/tiktok?retryWrites=true&w=majority";

// app config
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello, world");
});

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.get("/v2/posts", (req, res) => {
  TikTok.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  TikTok.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`listening on localhost : ${port}`));
