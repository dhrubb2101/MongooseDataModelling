import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        red: "User"
    },
    orderItems: {
        type: [orderItemSchema], //this will store an array of order items
        // type: [{
        //     productId: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Product"
        //     },
        //     quantity: {
        //         type: Number,
        //         required: true
        //     }
        // }] //this is an alternative way to define the order items
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending","Cancelled","Delivered"],
        default: "Pending" //if not given then it will be Pending
    }
},{timestamps : true})

export const Order = mongoose.model("Order", orderSchema)