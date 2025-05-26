import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        // username:String,
        // email:String,
        // isActive:Boolean
        //another way to define a field is like this:
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: Boolean,
            required: [true, "Password is required"]
        }
    },{timestamps: true} // This option adds createdAt and updatedAt timestamps to the schema
)

export const User = mongoose.model("User", userSchema);             
//explain this code
// This code snippet is defining a Mongoose schema for a User model in a MongoDB database.
// The `userSchema` is an empty schema, meaning it currently does not define any fields or properties for the User model.
//it has two parameters, the first is the schema and the second is the name of the model.
//model is a method that creates a model based on the schema.
//First what model should be created is passed as the first parameter, and the second parameter is the name of the model. that is on who should it be based
//we will always write this three code lines in the beginning of the file

//we use export const User because we want to use this model/schema in other files
//we use mongoose to create a model based on the schema. and when it is connected to database, these files automatically run and
//create a collection in the database with the name of the model, which is "User" in this case and will be based on userSchema.
// The `User` model can now be used to interact with the "users" collection in the MongoDB database.

//the database name is visible as users in the MongoDB Compass, which is the default name for the collection created by Mongoose when the model is named "User".

