'use strict'
const userModel= require('../models/user.model');
const booksController=(req,res)=>{   
 const searchQuery=req.query.email;
userModel.findOne({email:searchQuery}, (error,user)=>{
    if(error){
        res.send(error.message)
    }
    console.log(user.books)
        res.send(user.books);  
})
}
module.exports = booksController



