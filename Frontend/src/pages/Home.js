import TaskLists from '../components/TaskLists'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {


    return (
        <div className='home'>
            <h2 className='txt-light m-bottom'>Task List</h2>
            <div className='tasklist'>
                <Link to='/createtask'><button className='btn'>Create Your Task</button></Link>
            </div>
            <TaskLists/>
        </div>
    )
}

export default Home
