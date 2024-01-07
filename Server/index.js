require('dotenv').config();
const express = require('express')
const path = require("path")
const app = express()
const mongoURI = process.env.MONGO_URI;

// require("./db/conn")
const Register = require('./models/registers');
const { default: mongoose } = require('mongoose')

const port = 4000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/register', (req, res) => {
    res.render("register");
});

mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB!')
    app.listen(process.env.PORT || port, () => {
        console.log(`Node API app is running on port ${port}`)
    })
    
}).catch((error) => {
    console.log(error)
})

app.listen(process.env.PORT || port, () => {
    console.log(`Node API app is running on port ${port}`)
})

app.post('/register', async (req, res) => {
    
});

app.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await Register.findOne({ userName: userName, password: password });


        if (user) {
            res.render("home", { successMessage: "Logged in successfully!" });
        } else {
            res.render("index", { errorMessage: "Invalid username/password" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.get('/user', (req, res) => {
    res.json({message: "hello"})
})