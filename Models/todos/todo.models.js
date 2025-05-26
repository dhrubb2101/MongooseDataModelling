import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({},{timestamps: true}); //schema is a method in which we enter objects

export const Todo = mongoose.model("Todo",todoSchema)
//in the parameters first one we enter the name of mongodb database we are adding 
// and second is kiske basis pr schema banau
//when this Todo named database gets stored in mongodb what will be it's name it will be todos
