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




mongoose.connect('mongodb://localhost:27017/favBooks',
    { useNewUrlParser:true,useUnifiedTopology:true});
 
app.get('/books',booksController);
app.get('/',homeController);


app.listen(port,()=>{
    console.log(`listen to port ${port}`)
}
// done
)
// const client = jwksClient({
//     // this url comes from your app on the auth0 dashboard 
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
// });

// // this is a ready to use function
// const getKey = (header, callback) => {
//     client.getSigningKey(header.kid, function (err, key) {
//         const signingKey = key.publicKey || key.rsaPublicKey;
//         callback(null, signingKey);
//     });
// }
// // 'Bearer ;alsdkj;laskd;lkasd;lkl'
// app.get('/authorize', (req, res) => {
//     const token = req.headers.authorization.split(' ')[1];
//     jwt.verify(token, getKey, {}, (err, user) => {
//         if (err) {
//             res.send('invalid token');
//         }
//         res.send(user)
//     })
//     res.send(token);
// });

// app.listen(process.env.PORT, () => {
//     console.log(`listening to port: ${process.env.PORT}`);
// })
// mongoose.connect('mongodb://localhost:27017/favCats',
//     { useNewUrlParser: true, useUnifiedTopology: true }
// );

// app.get('/books', BooksController);
// app.get('/givemebooks', (req, res) => {
//     booksName = req.query.booksName
//     BooksModel.findOne({ name: booksName }, (error, book) => {
//         if (error) {
//             res.send(error.message)
//         }
//         res.send(book);
//     });
// });












