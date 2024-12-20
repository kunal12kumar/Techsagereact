// in this we will define all the schema means interface 
// since using typescript then we define the typescript interface in this also for user 

//  defining interface for the user 
import mongoose, { Schema, Document } from 'mongoose';
import { boolean } from 'zod';
export interface User extends Document{

    username: string;
    email: string;
    password: string;
    verifycode: string;
    expirycode: Date;
    mobileno: number;
    isVarified: boolean;  //this is to check whether user is otp verified or not 


}

// now define the schema to save the data of the  user

const userschema: Schema<User> =new Schema({
    username:{type:String, required:true , unique:true ,trim: true },
    email:{type:String, required:true , unique:true , trim:true , match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,"Invalid email "]},

    password:{ type:String, required: true , trim:true },
    mobileno:{type:Number , required:true , unique:true},
    verifycode:{ type:String , required:true , trim:true},
    expirycode:{type:Date },
    isVarified:{type:Boolean ,required:true}

});

// now export the  schema 

const Usermodel= (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>('User', userschema));

export default Usermodel;

