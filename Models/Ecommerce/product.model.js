import mongoose from 'mongoose';
import { Category } from './category.model';

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String,     
    },
    name: {
        required: true,
        type:String
    },
    productImage: { //we don't need to store the image, we will store the URL of the image
        type: String, //this will store the URL of the image
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0 //if not given then it will be 0
    },
    stock: {
        default: 0,
        type: Number, //this will store the stock of the product
    },
    Category:{
        type: mongoose.Schema.Types.ObjectId, //this is the id of the category
        ref: "Category", //this is the reference to the Category model, which means this field will store the ObjectId of a Category document
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId, //this is the id of the user who created this product
        ref: "User", //this is the reference to the User model, which means this field will store the ObjectId of a User document
    }
},{timestamps:true});

export const Product = mongoose.model("Product",productSchema);