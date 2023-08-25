const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect("mongodb+srv://User:admin@cluster0.zg9eesx.mongodb.net/?retryWrites=true&w=majority")

const taskSchema = mongoose.Schema({
    title: String,
    descriptions: String,
    completed: Boolean
})

const Task = mongoose.model('Task', taskSchema)

app.get("/", (req, res) => {
  res.send("express is here")
});

app.post("/create", (req, res) => {
    const newtask = new Task({
      title: req.body.title,
      descriptions: req.body.description,
      completed: req.body.completed
    })

    newtask.save().then((doc) => console.log(doc)).catch((err) => console.log(err))
})

app.listen(3001, function () {
  console.log("Express server is running")
})

app.get("/tasklist", (req, res) => {
  Task.find().then(item => res.json(item))
})
app.delete("/delete/:id", (req, res) => {
  Task.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Task.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});