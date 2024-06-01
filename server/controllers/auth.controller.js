import User from '../models/user.js';
import bcryptjs from 'bcryptjs';


export const signup = async (req,res,next)=>{
    const{username,email,password}=req.body;
    //sync bc this is synchronous
    const hashedpw = bcryptjs.hashSync(password,10);
    const newUser = new User ({username,email,password:hashedpw});

    try{
        await newUser.save();
        res.status(201).json({message:"user created succesfully"})    
    }catch(error){
        next(error)
    }
    
}