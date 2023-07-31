import React from 'react';
import "./AuthContainer.scss";
import Login from './Login';

const AuthContainer = () => {
  return (
    <section className='--flex-center --100vh --bg-grey'>
        <div className="container box">
            <Login/>
        </div>
    </section>
  )
}

export default AuthContainer