import mongoose from 'mongoose';
 
const subTodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false, //if not given then it will be false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, //this is the id of the user who created this subTodo
        ref:"User" //this is the reference to the User model, which means this field will store the ObjectId of a User document
    }
},{timestamps:true});

export const SubTodo = mongoose.model("SubTodo",subTodoSchema);


