import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteBox from './DeleteBox'
import '../styles/tasklist.css'

const TaskLists = () => {

    const[tasklist, setTasklist] = useState(null)
    const [loaddeletebox, setloaddeletebox] = useState(false)
    const [deleteid, setdeleteid] = useState("")

    useEffect(() => {
        axios.get("/tasklist").then(res => {
            setTasklist(res.data)
        })
    },[])

    const deleteTask = (id) => {
        setloaddeletebox(false)
        setdeleteid("")

        axios.delete(`/delete/${id}`).then(res => {
            setTasklist(res.data)
        })

        window.location.reload()
    }

    const deleteHandler = (id) => {
        setloaddeletebox(true)
        setdeleteid(id)
    }

    const cancelHandler = () => {
        setloaddeletebox(false)
        setdeleteid("")
    }


  return (
    <div className='tasklist'>
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
                    <td>{task.completed === true ? "Complited" : "Pending"}</td>
                    <td><Link to={'/updatetask/' + task._id}><button>Update</button></Link></td>
                    <td><button onClick={() => deleteHandler(task._id)}>Delete</button></td>
                {loaddeletebox && <DeleteBox msg="Are you sure you want to delete the Task?" okhandler={deleteTask} cancelhandler={cancelHandler} data={task._id = deleteid}/>}
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default TaskLists