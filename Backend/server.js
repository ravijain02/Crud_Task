const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("express is here");
});

app.post("/create", (req, res) => {
    // const newPost = new Post({
    //   title: req.body.title,
    //   description: req.body.description,
    // });

    // newPost
    // .save()
    // .then((doc) => console.log(doc))
    // .catch((err) => console.log(err));
    console.log(req.body)
});

app.listen(3001, function () {
  console.log("Express server is running");
});