import React from 'react';
import "./AuthContainer.scss";
import Login from './Login';
import Register from './Register';

const AuthContainer = () => {
  return (
    <section className='--flex-center --100vh'>
        <div className="container box">
            {/* <Login/> */}
            <Register/>
        </div>
    </section>
  )
}

export default AuthContainer