'use strict'
const userModel = require('../models/user.model')

const booksController=(req,res)=>{   
 const searchQuery=req.query.email;
userModel.findOne({email:searchQuery},(err,user)=>{
    if(err){

        console.log(typeof(user))
        res.send(err.message)
    }else{
        console.log(typeof(user.books))
        res.json(user.books)
    }
})

}

module.exports = booksController

// done