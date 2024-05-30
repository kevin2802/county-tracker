import express from 'express';
import User from '../models/user.js'
import bcryptjs from 'bcryptjs'

const router = express.Router();

router.post('/signup', async (req,res)=>{
    const{username,email,password}=req.body;
    //sync bc this is synchronous
    const hashedpw = bcryptjs.hashSync(password,10);
    const newUser = new User ({username,email,password:hashedpw});

    try{
        await newUser.save();
        res.status(201),json({message:"user created succesfully"})    
    }catch(error){
        res.status(500).json(error.message);
    }
    
})

export default router;