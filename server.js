const express=require('express');
let mongoose = require('mongoose');
require('dotenv').config ({path:"./config/.env"})
const connectDB=require('./config/connectDB')
const user=require('./models/user')
const app=express()
app.use(express.json())
connectDB()
//POST
app.post('/add', async(req,res)=>{
    const {fullName,email,phoneNumber}=req.body
    try {
      const newUser = new user(
        {fullName,email,phoneNumber}
      )
      await newUser.save()
      res.send(newUser)
    } catch (error) {console.error(error)}
      
    }
    )
    //GET
    app.get('/get',async(req,res)=>{
        try {
            const users =await user.find()
            res.send (users)
        }catch(error){console.error(error)}
    })

    //UPDATE
    app.put('/put/:id', async(req,res)=>{
       try {
           const editedUser = await user.findByIdAndUpdate (req.params.id, {...req.body}, {new:true})
       res.send(editedUser)
       }
      catch(error){console.error(error)}
    }
    )
    
    //delete
    app.delete('/delete/:id',async (req,res) =>{
        try {
            await user.findByIdAndDelete(req.params.id)
            res.send('user deleted')
        } catch (error) {console.error(error)}
    })


const PORT=process.env.PORT || 5000
app.listen(PORT,(err)=>err ? console.log(err):console.log(`server running on port ${PORT}...`))