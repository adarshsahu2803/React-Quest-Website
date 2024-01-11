import React, { useState } from 'react';
import '../css/LoginForm.css';
import signinImg from '../assets/signin-image.jpg';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [formLoginData, setFormLoginData] = useState({
        userName: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormLoginData({
            ...formLoginData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(formLoginData);

        try {
            const response = await fetch(`${process.env.SERVER_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formLoginData),
            });

            if (response.ok) {
                alert('Login successful.');
                console.log('Logged in successfully');
            } else {
                alert('Invalid credentials.');
                console.log('Login failed');
            }

            console.log(response);
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
                <form onSubmit={handleLogin}>
                    <div className="user-details-1">
                        <div className="input-box1">
                            <span className="details1">Username</span>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                name="userName"
                                value={formLoginData.username}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="input-box1">
                            <span className="details1">Password</span>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formLoginData.password}
                                onChange={handleInputChange}
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
