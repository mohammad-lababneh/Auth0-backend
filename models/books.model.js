'use strict';
const mongoose=require('mongoose');//deal with Schema
const bookSchema= new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    status:{type:String}
})
// const bookModel = mongoose.model('bools', booksSchema)
module.exports=bookSchema 
//done 