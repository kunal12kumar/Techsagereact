import mongoose, { Query } from "mongoose";

const contactusdetailsSchema= new mongoose.Schema({
    name:{type:String, required:true ,trim: true},
    email:{type:String, required:true ,trim: true},
    mobileno:{type:Number, required:true ,trim: true},
    query:{type:String ,trim: true},
})


const contactusdetails= (mongoose.models.contactusdetails ) || (mongoose.model('contactusdetails', contactusdetailsSchema));

export default contactusdetails;
