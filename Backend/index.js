const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
var PORT = 3002;
app.use(express.json());
app.use(cors());
require('./connection');

const BlogModel = require('./model');

// POST API
app.post('/add', async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.send(newBlog);
  } catch (error) {
    console.error(error);
    res.send('Error occurred ');
  }
});

// GET API to fetch all blog posts
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// GET API to fetch a single blog post by ID
app.get("/get/:id", async (req, res) => {
  try {
    let data = await BlogModel.findById(req.params.id);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// DELETE API
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete(id);
    res.send({ message: "Blog post deleted" });
  } catch (error) {
    console.log(error);
    res.send('Error occurred while deleting');
  }
});

// PUT API
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedBlog);
  } catch (error) {
    console.log(error);
    res.send('Error occurred while updating');
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
