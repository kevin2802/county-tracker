import User from '../models/user.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';


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
export const signin = async(req,res,next)=>{
    const{email,password}=req.body;
    try{
        const validUser = await User.findOne({email});//search for email using mongoose
        if(!validUser){//if email doesnt exist in db throw error
            return next(errorHandler(401,"invalid credentials"));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        //if not valid password
        if(!validPassword){
            return next(errorHandler(401,'wrong email/password'));
        }
        //JWT is unique to this project
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        //need to remove password from being sent to frontend
        //do this with spread operator
        const{password:hashedpw,...rest}=validUser._doc;
        //._doc removes unnecesary stuff
        //could add a date object and use expires to not have to relogin everytime(i.e expire 1 hour from now)
        //could delete and have to relogin everytime
        const expireDate = new Date(Date.now()+360000)//1 hour from now

        res.cookies('accesstoken',token,{ httpOnly:true ,expires:expireDate}).status(200).json(rest);
    }
    catch(error){
        next(error);
    }
}