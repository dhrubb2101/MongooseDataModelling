import mongoose from 'mongoose';

const categorySchema = new mongooseSchema({
    name:{
        type: String,
        required:true
    }
},{timestamps: true});

export const Category = mongoose.model("Category", categorySchema);

//Always what you export and the name of the model should be same.