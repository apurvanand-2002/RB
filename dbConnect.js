const mongoose = require('mongoose');
const URL = 'mongodb+srv://ApurvAnand:12345@cluster0.ijvb8ei.mongodb.net/shey-resume';
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongo DB connection successful');
})
connection.on('error', (error) => {
    console.log(error);
})