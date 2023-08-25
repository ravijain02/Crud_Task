import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/tasklist.css'

const TaskList = () => {

    const[tasklist, setTasklist] = useState(null)

    useEffect(() => {
        axios.get("/tasklist").then(res => {
            setTasklist(res.data)
        })
    },[tasklist])

    const deleteTask = (id) => {
        axios.delete(`/delete/${id}`).then(res => {
            setTasklist(res.data)
        })
    }

  return (
    <div className='tasklist'>
        <h2 className='txt-light m-bottom'>Task List</h2>
        <table className='border'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Task Status</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tasklist !== null && tasklist.map(task => 
                <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.descriptions}</td>
                    <td>{task.completed}</td>
                    <td><button>Update</button></td>
                    <td><button onClick={() => deleteTask(task._id)}>Delete</button></td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default TaskList