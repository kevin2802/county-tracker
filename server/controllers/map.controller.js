import User from "../models/user.js";
import { errorHandler } from "../utils/error.js";

export const saveMapState = async(req,res,next)=>{
    console.log(req.body.mapState)
    const {userId,mapState}=req.body;
    try{
        const user = await User.findById(userId)
        if(!user){
            return next(errorHandler(404,"user not found"));
        }
        if(req.body.mapType === 'STATE'){
            user.mapState = mapState;
            await user.save()
            res.status(200).json({ message: 'map state saved succesfully' });
        }
        else{
            user.countyMapState = mapState;
            await user.save()
            res.status(200).json({ message: 'map state saved succesfully' });
        }
        }
    catch(error){
        next(error)
    }



};
export const getMapState = async(req,res,next)=>{
    console.log(req.query)
    const  userID  = req.query.user;
    try {
        const user = await User.findById(userID);
        if (!user) {
            return next(errorHandler(404, 'User not found'));
        }
        if(req.query.type === 'STATE'){
            res.status(200).json(user.mapState);
        }
        else{
            res.status(200).json(user.countyMapState);
        }
        
    } catch (error) {
        next(error);
    }
}