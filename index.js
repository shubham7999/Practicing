const express = require('express');
const app = express();
const port = 8000;

//Used the express router
app.use('/' , require('./routes'));

//Setted up the ejs
app.set('view engine' , 'ejs');
app.set('views' , './views');


// Listening to the port
app.listen(port , (err)=>{
     
    if(err){
    console.log('Error occurs' , error);
    return ;
    }

    console.log("Server is running fine");

    
})