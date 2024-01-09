require('dotenv').config();
const express = require('express')
const app = express()
const Signup = require('./models/signup');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT || port, () => {
            console.log(`Node API app is running on port ${port}`)
        })
    })
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    console.log("this is home page")
    res.send("this is home page from server");
});

app.get('/login', (req, res) => {
    console.log("this is login page")
    res.send("this is login page from server");
});

app.get('/signup', (req, res) => {
    console.log("this is signup page")
    res.send("this is signup page from server");
});

app.post('/signup', async (req, res) => {
    try {
        const password = req.body.password
        const cpassword = req.body.confirmPassword

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
            res.status(201).json({ message: 'User registered successfully', user: savedUser });

        } else {
            res.send("Password are not matching!")
        }
    } catch (error) {
        console.error('Error occurred during signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
