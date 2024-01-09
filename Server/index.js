require('dotenv').config();
const express = require('express')
const app = express()
// const Register = require('./models/registers');
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

// app.get('/register', (req, res) => {
//     res.render("register");
// });

// app.post('/login', async (req, res) => {
//     try {
//         const { userName, password } = req.body;
//         const user = await Register.findOne({ userName: userName, password: password });


//         if (user) {
//             res.render("home", { successMessage: "Logged in successfully!" });
//         } else {
//             res.render("index", { errorMessage: "Invalid username/password" });
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });