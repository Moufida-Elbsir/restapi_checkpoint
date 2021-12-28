let mongoose = require('mongoose');
const connectDB = async() =>
{
    try{
      await mongoose.connect(process.env.db) 
         console.log('Database connection successful')
       
    }
       catch(error) {
         console.log(error)
       }
    }  
    module.exports=connectDB