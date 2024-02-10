import { useState, useEffect } from 'react';
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";


const Login = () => {

    return (
        <div className="Login-wrapper">
            <form action="">
                <h1>Login</h1>
                <h4>Please Enter Your Email, And Password</h4>
                <div className="Login-input-box">
                    <input type="text" name="username" id="" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="Login-input-box">
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                
                <div className="Login-signup">
                <button type='submit'>Login</button>
                <label htmlFor="">Don't Have Account? <a href="#">SignUp</a></label>
                </div>
            </form>
        </div>
    );
};

export default Login;
