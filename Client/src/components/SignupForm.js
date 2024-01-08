import React from 'react'
import '../css/SignupForm.css';
import signupImg from '../assets/signup-image.jpg';
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const handleRegister = () => {
        // Implement register functionality here or redirect to registration page
        console.log('Redirecting to registration page');
    };

    return (
        <div className='main-div'>
            <div className="container">
                <div className="content">
                    <form action="/register" method="POST"  onSubmit={handleRegister}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" name="fullName" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" placeholder="Enter your username" name="userName" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" name="email" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" name="phone" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" placeholder="Enter your password" name="password" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="password" placeholder="Confirm your password" name="confirmPassword" required />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" value="Male" />
                            <input type="radio" name="gender" id="dot-2" value="Female" />
                            <input type="radio" name="gender" id="dot-3" value="Prefer not to say" />
                            <span class="gender-title">Gender</span>
                            <div className="category">
                                <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label for="dot-3">
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