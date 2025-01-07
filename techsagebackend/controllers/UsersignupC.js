// In this we define the function to save the data of the user
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { veriyemail } from "../lib/verifyemail.js";
import nodemailer from "nodemailer";

export const UserSignup = async (req, res) => {

    try {
        const { username, email, password, mobileno } = req.body;
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(mobileno)

        const checkusername = await User.findOne({ username, isVarified: true });





        // if username exist then check whether its email is varified or 

        if (checkusername) {
            console.log("User with this username already exist");
            return res.status(400).json({ success: false, message: "Username already exist" });

        }

        // for otp
        const verifycode = Math.floor(100000 + Math.random() * 900000).toString();



        // now check for the email whether it exist for other user or not if email exist for other username but it is not verified yet then send otp on that email and verify that 

        const isverifyemail = await User.findOne({ email }

        );

        // if email is varified

        if (isverifyemail) {

            if (isverifyemail.isVarified) {
                console.log("User exits with this email")

                return res.status(400).json({ success: false, message: "Email is already taken by anotheruser" })
            } else {
                // now saving the otp and expirytime for the sign up 

                const securepassword = await bcrypt.hash(password, 10)
                isverifyemail.password = securepassword;
                isverifyemail.verifycode = verifycode;
                isverifyemail.expirycode = new Date(Date.now() + 360000);
                isverifyemail.mobileno = mobileno
                // now save the update data into the databasse;

                const verifiedemail = await isverifyemail.save();
                console.log(verifiedemail);

            }


        }

        // now if username and email both does not exist then user is a new user so save its all infromation into the database
        else {
            const hashedpassword = await bcrypt.hash(password, 10);
            const expirytime = new Date();
            expirytime.setHours(expirytime.getHours() + 1);

            const newuser = new User({
                username,
                email,
                password: hashedpassword,
                verifycode: verifycode,
                isVarified: false,
                mobileno,
                expirycode: expirytime

            })

            const savenewuser = await newuser.save();

            console.log(savenewuser);
        }

        // now sending email 

        // const verificationResponse = await veriyemail(
        //     email, verifycode, username
        // )
        // console.log(verificationResponse);
        // console.log(verificationResponse.success);

        // // now handeling verificationResponse (email ) response

        // if (!verificationResponse.success) {

        //     return res.status(400).json({
        //         success: false,
        //         message: (verificationResponse.message),

        //     })
        // } else {
        //     console.log("Email sent successfully ")

        //     return res.status(200).json({
        //         success: true,
        //         message: ("Otp sent successfully")

        //     })
        // }


        // for sending emails
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'techcare.services1@gmail.com', // Replace with your email
                pass: 'nfac hmlr wpld mziv',        // Replace with your email password
            },
        });


        // Function to send OTP email
        const sendOtpEmail = async (email, verifycode) => {
            const mailOptions = {
                from: 'techcare.services1@gmail.com', // Replace with your email
                to: email,
                subject: 'Welcome to Robotics World ',
                text: `Hello,   ${username}   your OTP for signup is: ${verifycode}`,
            };

            try {
                await transporter.sendMail(mailOptions);
                console.log('OTP sent successfully');
                console.log("Email sent successfully ")

                return res.status(200).json({
                    success: true,
                    message: ("Otp sent successfully")

                })
            } catch (error) {
                console.error('Error sending OTP email:', error);
                return res.status(400).json({
                            success: false,
                            message: (verificationResponse.message),
            
                        })
                
            }
        };

        const result = await sendOtpEmail(email, verifycode)






    } catch (error) {
        console.error("Sign up failed", error);
        console.log(error);

        return res.status(400).json({
            success: false,
            message: " Sign up failed ",
            error
        })




    }
}