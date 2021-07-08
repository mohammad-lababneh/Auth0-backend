'use strict';
const express = require('express');//creat backend server
const cors = require('cors');
require('dotenv').config(); // name of the liprary allow our server to read .env file
const mongoose = require('mongoose'); // alow you to connect the back end to data base
const app = express(); // express liprary 
const homeController = require('./controller/home.controller');
const booksController = require('./controller/books.controller');

app.use(cors()); // 
const port = process.env.PORT;
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
// const BooksModel = require('./models/books.model');

mongoose.connect('mongodb://localhost:27017/faveBooks',
    { useNewUrlParser:true,useUnifiedTopology:true});
 
app.get('/books',booksController);
app.get('/',homeController);


app.listen(port,()=>{
    console.log(`listen to port ${port}`)
}
// done
)












