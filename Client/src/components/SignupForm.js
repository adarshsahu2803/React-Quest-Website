import React, { useState } from 'react';
import '../css/SignupForm.css';
import signupImg from '../assets/signup-image.jpg';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch(`${process.env.SERVER_URL}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Signup successful.');
                console.log('Signup in successfully');
            } else {
                alert('Signup failed.');
                console.log('Signup failed');
            }

            console.log(response)
        } catch (error) {
            console.error('Error occurred during signup:', error);
        }
    };

    return (
        <div className='main-div'>
            <div className="container">
                <div className="content">
                    <form onSubmit={handleRegister}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input
                                    type="text"
                                    placeholder="Enter your number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input
                                    type="text"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input
                                    type="text"
                                    placeholder="Confirm your password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input
                                className='gender-radio'
                                type="radio"
                                name="gender"
                                id="dot-1"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleInputChange}
                            />
                            <input
                                className='gender-radio'
                                type="radio"
                                name="gender"
                                id="dot-2"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleInputChange}
                            />
                            <input
                                className='gender-radio'
                                type="radio"
                                name="gender"
                                id="dot-3"
                                value="Prefer not to say"
                                checked={formData.gender === 'Prefer not to say'}
                                onChange={handleInputChange}
                            />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='container-img'>
                <img src={signupImg} alt='signup-img' />
                <div className="login-register">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;