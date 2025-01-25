import User from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";



export const Usersignin= async (req ,res)=>{
    console.log("Request Body:", req.body);


    
    try {
        const { password ,email}=req.body;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        } //

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         if (!passwordPattern.test(password)) {
             return res.status(400).json({ message: 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.' });
         }

        const Userexitwiththisemail=await User.findOne({email});
        console.log(Userexitwiththisemail)

        if (!Userexitwiththisemail){

            return res.status(404).json({
                success: false,
                message: "User does not exist with this email"
            })


        }

        if (Userexitwiththisemail.isVarified){
            const username=Userexitwiththisemail.username

        const userhashedpassword= Userexitwiththisemail.password;

        const isPasswordValid = await bcrypt.compare(password, userhashedpassword);

        const SECRET_KEY =process.env.SECRET_KEY;

        if (isPasswordValid) {
            const token = jwt.sign({ username ,email,Userexitwiththisemail }, SECRET_KEY);
            res.status(200).json({
                success: true,
                message: "Sign In Successful",
                token
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid password",
            });
        }

        }else{
            res.status(402).json({
                success :false,
                message: "Kindly first Verify your account"
            })
        }


        
    } catch (error) {

        return res.status(401).json(
            {
                success:false,
                message: "Authentication failed"
            }
        )

        
    }

    




}