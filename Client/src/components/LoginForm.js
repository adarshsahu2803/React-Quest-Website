import React, { useState } from 'react';
import '../css/LoginForm.css';
import signinImg from '../assets/signin-image.jpg';
import { Link } from 'react-router-dom';

const LoginForm = () => {
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
        <div className='main-div1'>
            <div className='container-img1'>
                <img src={signinImg} alt='signin-img' />
                <div className="login-register">
                    <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                </div>
            </div>

            <div className="content1">
                <form action="/login" method="POST">
                    <div className="user-details-1">
                        <div className="input-box1">
                            <span className="details1">Username</span>
                            <input type="text" placeholder="Enter your username" name="userName" required />
                        </div>
                        <div className="input-box1">
                            <span className="details1">Password</span>
                            <input type="text" placeholder="Enter your password" name="password" required />
                        </div>
                    </div>
                    <div className="button1">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default LoginForm;
