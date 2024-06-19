import mongoose from "mongoose";
// a mongoose schema for users on this website
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,

        
    },
    mapState: {
        type: Object,
        default: {},
    },
    countyMapState:{
        type:Object,
        default:{},
    }
},
{timestamps:true});
const User = mongoose.model("User",userSchema);
export default User;