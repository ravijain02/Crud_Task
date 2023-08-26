const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect("mongodb+srv://User:admin@cluster0.zg9eesx.mongodb.net/myDatabaseName", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const taskSchema = mongoose.Schema({
    title: String,
    descriptions: String,
    completed: Boolean
})

const Task = mongoose.model('Task', taskSchema)

app.get("/", (req, res) => {
    res.send("express is here")
})

app.post("/create", (req, res) => {
    const task = new Task({
      title: req.body.title,
      descriptions: req.body.description,
      completed: req.body.completed
    })

    task.save().then((doc) => console.log(doc)).catch((err) => console.log(err))
    res.status(500).json({ error: 'Internal server error' })
})

app.listen(3001, function () {
    console.log("Express server is running")
})

app.get("/tasklist", (req, res) => {
    Task.find().then(item => res.json(item))
})

app.get('/tasklist/:id', (req, res) => {
    const taskId = req.params.id;

    Task.findById(taskId)
        .then(task => {
        if (!task) {
            return res.status(404).json({ error: 'Task not found' })
        }
        res.json(task)
        })
        .catch(error => {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    })
})

app.put('/tasklist/:id', (req, res) => {
    const taskId = req.params.id;
    const { title, descriptions, completed } = req.body;

    Task.findByIdAndUpdate(taskId, { title, descriptions, completed }, { new: true })
        .then(updatedTask => {
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' })
        }
        res.json(updatedTask)
        })
        .catch(error => {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    })
})

app.delete("/delete/:id", (req, res) => {
    Task.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
})
