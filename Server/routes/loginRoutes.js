const express = require('express')
const router = express.Router()
const Signup = require('../models/signup')

router.get('/login', (req, res) => {
    console.log("this is login page")
    res.send("this is login page from server");
});

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Signup.findOne({ userName });
        console.log(user)
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = (password === user.password)? 1:0;

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;