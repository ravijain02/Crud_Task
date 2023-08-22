import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import Data from '../api/data.json'

const Home = ({ username }) => {

    const [tasks, setTasks] = useState([])

    return (
        <div className='home'>
            <h2>Task List</h2>
            <div className='task-data'>
                {
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
                }
            </div>
        </div>
    )
}

export default Home
