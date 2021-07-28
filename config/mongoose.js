//Requiring the mongoose library
const mongoose = require('mongoose');

//Connecting to the databse
mongoose.connect('mongodb://localhost:27017/Social', {useNewUrlParser: true, useUnifiedTopology: true});

//Acquiring the connection to check if it is succes or not
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'connection error:'));

//Up and running and printing the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");
});