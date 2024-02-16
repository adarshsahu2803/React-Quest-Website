const express = require('express')
const router = express.Router()
const Signup = require('../models/signup')

router.get('/signup', (req, res) => {
    console.log("this is signup page")
    res.send("this is signup page from server");
});

router.post('/signup', async (req, res) => {
    try {
        const password = req.body.password
        const cpassword = req.body.confirmPassword

        console.log("password " + password + ":: cpassword " + cpassword);

        if (password === cpassword) {

            const userSignupData = new Signup({
                fullName: req.body.fullName,
                userName: req.body.userName,
                email: req.body.email,
                phone: req.body.phone,
                password: password,
                confirmPassword: cpassword,
                gender: req.body.gender,
            })

            const signedup = await userSignupData.save()
            return res.status(200).json({ message: 'User registered successfully' });
            // res.status(201).json({ message: 'User registered successfully', user: signedup });

        } else {
            return res.status(500).json({ message: 'Password are not matching' });
            // res.send("Password are not matching!")
        }
    } catch (error) {
        console.error('Error occurred during signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;