import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false, //if not given then it will be false
    }, //if all fields are entered then it will be true
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, //this is the id of the user who created this todo
        ref: "User" //this is the reference to the User model, which means this field will store the ObjectId of a User document
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId, //this is the id of the subTodo
            ref: "SubTodo" //this is the reference to the SubTodo model, which means this field will store the ObjectId of a SubTodo document
        }
    ] //Array of Sub-Todos
},{timestamps: true}); //schema is a method in which we enter objects

export const Todo = mongoose.model("Todo",todoSchema)
//in the parameters first one we enter the name of mongodb database we are adding 
// and second is kiske basis pr schema banau
//when this Todo named database gets stored in mongodb what will be it's name it will be todos

