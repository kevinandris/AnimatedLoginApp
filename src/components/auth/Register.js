import { useState } from 'react'
import RegisterImg from '../../assets/register.svg'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { GoDotFill } from "react-icons/go"
import { FaCheck } from "react-icons/fa"

const Register = ({onLogin}) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  
  return (
    <div className='main-container --flex-center'>

        <div className="form-container">
            <form className="--form-control">
                <h2 className='--color-danger --text-center' >Register</h2>
                <input type="text" className='--width-100' placeholder='Username'/>
                <input type="email" className='--width-100' placeholder='Email'/>

                {/* //  ! PASSWORD FIELD */}
                <div className="password">
                  <input type={showPassword ? "text" : "password"} className='--width-100' placeholder='Password'/>

                  <span className="icon" onClick={handleTogglePassword}>
                    {showPassword ? <AiOutlineEyeInvisible/> : (<AiOutlineEye />)}
                  </span>
                </div>

                <button className="--btn --btn-primary --btn-block">Register</button>
                <span className='--text-sm --block'>Have an account? {" "}<a href="#" className='--text-sm' onClick={onLogin}>Login</a></span>

                {/* //! Pass Strength Indicator */}
                <div>
                      <ul>
                        <p>Password Strength Indicator</p>
                        <li>
                        <span>

                          <GoDotFill />
                          &nbsp; Lowercase & Uppercase
                        </span>
                        </li>
                        <li>
                          <span>
                            <GoDotFill />
                            &nbsp; Numbers (0-9)
                          </span>
                        </li>
                        <li>
                        <span>
                            <GoDotFill />
                            &nbsp; Special Character (!@#$%^&*)
                        </span>
                        </li>
                        <li>
                        <span>
                            <GoDotFill />
                            &nbsp; At least 8 Character
                        </span>
                        </li>
                      </ul>
                    </div>
            </form>
        </div>

        <div className="img-container">
            <img src={RegisterImg} alt="login" />
        </div>
       
    </div>
  )
}

export default Register