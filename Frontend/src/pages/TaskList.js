import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/tasklist.css'

const TaskList = () => {

    const[tasklist, setTasklist] = useState(null)

    useEffect(() => {
        axios.get("/").then(res => {
            setTasklist(res)
        })
    },[tasklist])

  return (
    <div className='tasklist'>
        <h2 className='txt-light m-bottom'>Task List</h2>
        <table className='border'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Task Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{}kkk</td>
                    <td>{}lll</td>
                    <td>{}lll</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TaskList