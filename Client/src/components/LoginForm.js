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

    const handleLogin = async () => {
        try {
            // Make an API call to authenticate the user
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // User successfully logged in
                console.log('Logged in successfully');
                // You may redirect the user or perform other actions upon successful login
            } else {
                // Handle login failure
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
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
                <form action="/login" method="POST" onSubmit={handleLogin}>
                    <div className="user-details-1">
                        <div className="input-box1">
                            <span className="details1">Username</span>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                name="userName"
                                value={username}
                                onChange={handleUsernameChange}
                                required />
                        </div>
                        <div className="input-box1">
                            <span className="details1">Password</span>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
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
