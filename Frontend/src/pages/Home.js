import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {

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
        temptask[key] = e.target.value === true ? e.target.checked : e.target.value
        setTasks(temptask)
    }

    const addTask = (e) => {
        e.preventDefault()
        axios.post('/create', tasks).then(res => console.log(res)).catch(err => console.log(err))
        navigate("/tasklist")
    }

    return (
        <div className='home'>
            <h2 className='m-bottom'>Add Task</h2>
            <div className='tasklist'>
                <Link to='/tasklist'><button >Show Task List</button></Link>
            </div>
            <div className='task'>
                <div className='input_container'>
                    <label>Title</label>
                    <input type='text' value={tasks.title} onChange={(e) => updateTask(e, 'title')} placeholder='Enter the title'/><br/>
                </div>
                <div className='input_container'>
                    <label>Description</label>
                    <input type='text' value={tasks.description} onChange={(e) => updateTask(e, 'description')} placeholder='Enter Description'/><br/>
                </div>
                {(tasks.title === "" && tasks.description === "") ? (
                    <button className='btn_disable'>Add Task</button>
                ) : (
                    <button onClick={addTask}>Add Task</button>
                )}
            </div>
        </div>
    )
}

export default Home
