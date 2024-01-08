require('dotenv').config();
const express = require('express')
// const connectDB = require("./db/connect");
const app = express()
const Register = require('./models/registers');
const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const middleware = (req, res, next) => {
    console.log(`my middleware`);
    next();
}

app.listen(process.env.PORT || port, () => {
    console.log(`Node API app is running on port ${port}`)
})

mongoose.connect("mongodb+srv://adarshsahu1077:adarshsahu@cluster0.uumvrc1.mongodb.net/db1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));

// const start = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Connected to ${PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

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