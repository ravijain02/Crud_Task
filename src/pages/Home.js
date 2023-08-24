import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/home.css'
// import Data from '../api/data.json'

const Home = ({ username }) => {

    const [tasks, setTasks] = useState(
        {
            title: "",
            description: "",
            status: false
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
    }

    return (
        <div className='home'>
            <h2>Task List</h2>
            <div className='task-data'>
                {/* {
                    <table>
                        <tbody>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Completed</th>
                            </tr>
                            {Data.map((task) =>
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.completed}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                } */}
                <div>
                    <label>Title</label>
                    <input type='text' value={tasks.title} onChange={(e) => updateTask(e, 'title')} placeholder='Enter Title'/><br/>
                    <label>Description</label>
                    <input type='text' value={tasks.description} onChange={(e) => updateTask(e, 'description')} placeholder='Enter Description'/><br/>
                    <label>Task Status</label>
                    <input type='checkbox' value={tasks.status} onChange={(e) => updateTask(e, 'status')} placeholder='Enter Task Status'/><br/>
                    <button onClick={addTask}>Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default Home
