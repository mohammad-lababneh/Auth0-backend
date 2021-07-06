  
'use strict';

const mongoose=require('mongoose');//deal with Schema

/*
first define a schema 
schema: description about how the data must looklike in the database
cats:
    name:{type:String}
*/

const booksSchema= new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    status:{type:String}
})
// const bookModel = mongoose.model('bools', booksSchema)
module.exports=booksSchema // 