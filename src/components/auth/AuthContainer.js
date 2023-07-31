import { useState } from 'react';
import "./AuthContainer.scss";
import Login from './Login';
import Register from './Register';
import Reset from './Reset';

const AuthContainer = () => {

  const [login, setLogin] = useState(true)
  const [register, setRegister] = useState(false)
  const [reset, setReset] = useState(false)

  const handleRegister = () => {
    setLogin(false)
    setReset(false)
    setRegister(true)
  }

  const handleReset = () => {
    setLogin(false)
    setRegister(false)
    setReset(true)
  }

  const handleLogin = () => {
    setReset(false)
    setRegister(false)
    setLogin(true)
  }
  
  return (
    <section className='--flex-center --100vh'>
        <div className="container box">

          { login && <Login onRegister={handleRegister} onReset={handleReset}/> }
          { register && <Register onLogin={handleLogin}/> }
          { reset && <Reset  onLogin={handleLogin}/> }
          
        </div>
    </section>
  )
}

export default AuthContainer