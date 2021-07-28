const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const port = 8000;
const db = require('./config/mongoose.js');
const cookieParser = require('cookie-parser');
const expressEjsLayouts = require('express-ejs-layouts');
app.use(cookieParser());
//  app.use(express.urlencoded());

//Used the express router
app.use('/' , require('./routes/index'));
app.use(cookieParser());
app.use(expressEjsLayouts);

//Setted up the ejs
app.set('view engine' , 'ejs');
app.set('views' , './views');


// Listening to the port
app.listen(port , (err)=>{
     
    if(err){
    console.log('Error occurs' , error);
    return ;
    }

    console.log("Server is runing fine");

    
})