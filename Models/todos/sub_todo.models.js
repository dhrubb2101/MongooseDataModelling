import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({})

export const User = mongoose.model("User", userSchema);             
//explain this code
// This code snippet is defining a Mongoose schema for a User model in a MongoDB database.
// The `userSchema` is an empty schema, meaning it currently does not define any fields or properties for the User model.
//it has two parameters, the first is the schema and the second is the name of the model.
//model is a method that creates a model based on the schema.
//First what model should be created is passed as the first parameter, and the second parameter is the name of the model. that is on who should it be based
//we will always write this three code lines in the beginning of the file