const mongoose=require('mongoose');
const Schema=mongoose.Schema

let userSchema = new Schema({
    fullName: String,
    email:String,
    phoneNumber:String
  })
  module.exports=mongoose.model('user',userSchema)