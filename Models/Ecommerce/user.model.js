import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true, //this will convert the username to lowercase
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required: true,
    },
},{timestamps:true}); 

export const User = mongoose.model("User", userSchema)

