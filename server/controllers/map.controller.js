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
    }
    catch(error){
        next(error)
    }



};
export const getMapState = async(req,res,next)=>{
    const { userID } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return next(errorHandler(404, 'User not found'));
        }

        res.status(200).json(user.mapState);
    } catch (error) {
        next(error);
    }
}