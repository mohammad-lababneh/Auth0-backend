  'use strict';
const mongoose=require('mongoose');//deal with Schema
const bookSchema=require('./books.model')
const userSchema= new mongoose.Schema({
    email:{type:String},
    books:[bookSchema] // each user shouls have list of book
});
const userModel = mongoose.model('userSchema',userSchema)
// this model define model in schema

// const seedUser=()=>{
//     const feLawsOfPower = {
//         name:'48 laws of power',
//         description:"any thing",
//         status:"any thing"
//     }
//     const art0fwar = {
//         name:'48 laws of power',
//         description:"any thing",
//         status:"any thing"
//     }
//     const mySystem = {
//         name:'48 laws of power',
//         description:"any thing",
//         status:"any thing"
//     }

//     const erada = new userModel({
//         email:'erada.abdalrhman@gmail.com',
//         books:[mySystem,art0fwar,feLawsOfPower]
//     })
//     erada.save();
//     return (erada)
// }

module.exports=userModel;
