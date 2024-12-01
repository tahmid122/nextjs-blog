const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//mongoose connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
//Schema and Model

const blogSchema = new mongoose.Schema({
  title: String,
  sortdesc: String,
  category: String,
  author: String,
  date: String,
  thumb: String,
  content: String,
});

const blogs = new mongoose.model("blogs", blogSchema);

app.get("/blogs", async (red, res) => {
  try {
    const allBlogs = await blogs.find({});
    res.status(200).send(allBlogs);
  } catch (error) {
    res.status(401).send({ error });
  }
});
app.post("/single-blog", async (req, res) => {
  try {
    const { title } = req.body;
    const findBlog = await blogs.findOne({ title: title });
    res.status(200).send(findBlog);
  } catch (error) {
    res.status(401).send({ error });
  }
});
app.post("/blogs-post", async (req, res) => {
  try {
    const newBlog = await new blogs({
      title: req.body.title,
      sortdesc: req.body.sortdesc,
      category: req.body.category,
      author: req.body.author,
      date: req.body.date,
      thumb: req.body.thumb,
      content: req.body.content,
    });
    const save = await newBlog.save();
    res.status(200).send(save);
  } catch (error) {
    res.status(401).send({ error });
  }
});
app.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const findBlogs = await blogs.find({ category: category });
    res.status(200).send(findBlogs);
  } catch (error) {
    res.status(401).send({ error });
  }
});
//routes
app.get("/", (req, res) => {
  res.send("Hello Welcome to NExtjs Blog");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running at http://localhost:${process.env.PORT}`)
);
