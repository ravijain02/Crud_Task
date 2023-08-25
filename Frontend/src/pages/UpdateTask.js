import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UpdateTask = () => {

    const {id} = useParams()
    let navigate = useNavigate()
    const[taskdata, setTaskdata] = useState(null)

    useEffect(() => {
        axios.get(`/tasklist/${id}`).then(res => {
            setTaskdata(res.data)
        })
    },[])

    const updateTask = (e, key) => {
        let temptaskdata = {...taskdata}
        temptaskdata[key] = e.target.value === 'true' ? e.target.checked : e.target.value
        setTaskdata(temptaskdata)
    }

    const updateHandler = () => {
        axios.put('/tasklist/' + id, taskdata).then(res => {
            setTaskdata(res.data)
        })
        navigate("/home")
    }

    const backHandler = () => {
        navigate("/home")
    }

  return (
    <div className='tasklist'>
        <h2 className='m-bottom'>Update Task</h2>
        {taskdata !== null &&
            <div className='task'>
                <div className='input_container'>
                    <label>Title</label>
                    <input type='text' value={taskdata.title} onChange={(e) => updateTask(e, 'title')} placeholder='Enter the title'/><br/>
                </div>
                <div className='input_container'>
                    <label>Description</label>
                    <input type='text' value={taskdata.descriptions} onChange={(e) => updateTask(e, 'descriptions')} placeholder='Enter Description'/><br/>
                </div>
                <div className='input_container'>
                    <label>Your Task Done</label>
                    <input type='checkbox' value={true} checked={taskdata.completed === true} onChange={(e) => updateTask(e, 'completed')} placeholder='Enter Description'/><br/>
                </div>
                <div className='btn_container'>
                    <button onClick={updateHandler}>Update Task</button>
                    <button onClick={backHandler}>Back</button>
                </div>
            </div>
        }
    </div>
  )
}

export default UpdateTask