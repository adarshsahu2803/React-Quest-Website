import React, { useState } from 'react';
import '../css/Login.css';
import signinImg from '../assets/signin-image.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Implement login functionality here
        console.log('Logging in with:', username, password);
    };

    const handleRegister = () => {
        // Implement register functionality here or redirect to registration page
        console.log('Redirecting to registration page');
    };

    return (
        <div className='main-div'>
            <div className='container-img'>
                <img src={signinImg} alt='signin-img' />
            </div>
            <div className="container">
                <div className="title">Login</div>
                <div className="content">
                    <form action="/login" method="POST">
                        <div className="user-details-1">
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" placeholder="Enter your username" name="userName" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter your password" name="password" required />
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <div className="login-register">
                    <p>Not a user? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;
