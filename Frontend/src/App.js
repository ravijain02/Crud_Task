import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import './App.css'

function App() {

  return (
    <div className='App'>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/tasklist" element={<TaskList/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
