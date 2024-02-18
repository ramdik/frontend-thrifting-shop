import { useState, useEffect, useContext } from 'react';
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="Login-container">
            <div className="Login-wrapper">
                <form action="">
                    <h1>Login</h1>
                    <h4>Please Enter Your Username, And Password</h4>
                    <div className="Login-input-box">
                        <input type="text" name="username" id="username"  placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="Login-input-box">
                        <input type="password" name="password" id="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="Login-signup">
                        <button type='submit'>Login</button>
                        <label>Don't Have Account? <p onClick={() => navigate("/sign-in")}>Sign In</p></label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
