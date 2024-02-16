require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
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

// Import route handlers
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');

// Use routes
app.use('/', loginRoutes)
app.use('/', signupRoutes)

app.get('/', (req, res) => {
    console.log("this is home page")
    res.send("this is home page from server");
});