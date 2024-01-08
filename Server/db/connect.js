const mongoose = require('mongoose');

const connectDB = () => {
    console.log("hello")
    return mongoose.connect("mongodb+srv://adarshsahu1077:adarshsahu@cluster0.uumvrc1.mongodb.net/db1", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = connectDB;