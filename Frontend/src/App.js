import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
import UpdateTask from './pages/UpdateTask'
import './App.css'

function App() {

  return (
    <div className='App'>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/createtask" element={<CreateTask/>} />
                <Route path="/updatetask/:id" element={<UpdateTask/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
