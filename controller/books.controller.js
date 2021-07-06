'use strict'
const userModel = require('../models/user.model')

const booksController=(req,res)=>{   
 const searchQuery=req.query.email;
userModel.findOne({email:searchQuery},(user)=>{
    if(!user){

        res.send('user not found')
    }else{
        res.json(user.books)
    }
})

}

module.exports = booksController

// done