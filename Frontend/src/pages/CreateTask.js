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
        navigate("/home")
    }

    const backHandler = () => {
        navigate("/home")
    }

  return (
    <div className='create m-top'>
        <h2 className='m-bottom'>Create Task</h2>
        <div className='task'>
            <div className='input_container'>
                <label>Title</label>
                <input type='text' value={tasks.title} onChange={(e) => updateTask(e, 'title')} placeholder='Enter the title'/><br/>
            </div>
            <div className='input_container'>
                <label>Description</label>
                <input type='text' value={tasks.description} onChange={(e) => updateTask(e, 'description')} placeholder='Enter Description'/><br/>
            </div>
            <div className='btn_container'>
                {(tasks.title === "" && tasks.description === "") ? (
                    <button className='btn_disable btn'>Add Task</button>
                ) : (
                    <button onClick={addTask} className='btn'>Add Task</button>
                )}
                <button onClick={backHandler}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTask