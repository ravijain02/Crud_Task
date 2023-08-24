import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authenticated, setAuthenticated] = useState(false)
  
    const user_name = 'user'
    const user_password = 'admin'
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (username === user_name && password === user_password) {
          setAuthenticated(true)
      } else {
          setAuthenticated(false)
          alert('Authentication failed. Please check your username and password.')
      }
    }

  return (
    <div className="App">
      {authenticated ? (
        <Navigate to="/home"/>
      ) : (
        <div className="login_container">
            <div className="login_form">
                <h2>Login</h2>
                <div className="input_fields">
                    <input type="text" className="input_txt" placeholder='User Name' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input_fields">
                    <input type="password" className="input_txt" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="btns">
                    <button className='btn' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default Login