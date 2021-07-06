  'use strict';
const mongoose=require('mongoose');//deal with Schema
const bookSchema=require('./books.model')
/*
first define a schema 
schema: description about how the data must looklike in the database
cats:
    name:{type:String}
*/
const userSchema= new mongoose.Schema({
    email:{type:String},
    books:[bookSchema] // each user shouls have list of book
});
// module.exports=userSchema

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

//     const mohammad = new userModel({
//         email:'lababnehmohammad96@gmail.com',
//         books:[mySystem,art0fwar,feLawsOfPower]
//     })
//     mohammad.save();
//     console.log(mohammad);
//     return (mohammad)
// }
module.exports=userModel;