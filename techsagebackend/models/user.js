// in this we will define all the schema means interface 
// since using typescript then we define the typescript interface in this also for user 

//  defining interface for the user 
import mongoose, { Schema, Document } from 'mongoose';

// now define the schema to save the data of the  user

const userschema=new mongoose.Schema({
    username:{type:String, required:true , unique:true ,trim: true },
    email:{type:String, required:true , unique:true , trim:true , match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,"Invalid email "]},

    password:{ type:String, required: true , trim:true },
    mobileno:{type:Number , required:true , unique:true},
    verifycode:{ type:String , required:true , trim:true},
    expirycode:{type:Date },
    isVarified:{type:Boolean ,required:true}

});

// now export the  schema 

const User= (mongoose.models.User ) || (mongoose.model('User', userschema));

export default User;

