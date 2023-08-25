import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/home.css'

const CreateTask = () => {
    let navigate = useNavigate()

    const [tasks, setTasks] = useState(
        {
            title: "",
            description: "",
            completed: false
        }
    )

    const updateTask = (e, key) => {
        let temptask = {...tasks}
        temptask[key] = e.target.value
        setTasks(temptask)
    }

    const addTask = (e) => {
        e.preventDefault()
        axios.post('/create', tasks).then(res => console.log(res)).catch(err => console.log(err))
        navigate("/tasklist")
    }

  return (
    <div>
        <div className='task'>
            <div className='input_container'>
                <label>Title</label>
                <input type='text' value={tasks.title} onChange={(e) => updateTask(e, 'title')} placeholder='Enter the title'/><br/>
            </div>
            <div className='input_container'>
                <label>Description</label>
                <input type='text' value={tasks.description} onChange={(e) => updateTask(e, 'description')} placeholder='Enter Description'/><br/>
            </div>
            <button onClick={addTask}>Add Task</button>
        </div>
    </div>
  )
}

export default CreateTask