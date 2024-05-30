import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js'
import authroute from './routes/auth.js'
//this is where the server lives

//allow dotenv to work
dotenv.config();

//connect to mongoose using dotenv variable
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongo')
})

//create server on port 3000
const app = express();

app.use(express.json());
app.listen(3000,()=>{
    console.log("SERVER RUNNING ON 3000!")
})

//routes could live here (app.get/app.post) or in their own files

app.use("/server/user",userRoutes);
app.use("/server/auth",authroute)