import User from "../models/user.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const UserSignup = async (req, res) => {
    try {
        const { username, email, password, mobileno } = req.body;
        console.log(username, email, password, mobileno);

        const checkusername = await User.findOne({ username, isVarified: true });

        // Check if username exists
        if (checkusername) {
            console.log("User with this username already exist");
            return res.status(400).json({ success: false, message: "Username already exist" });
        }

        // Generate OTP
        const verifycode = Math.floor(100000 + Math.random() * 900000).toString();

        // Check if email already exists but not verified
        const isverifyemail = await User.findOne({ email });

        if (isverifyemail) {
            if (isverifyemail.isVarified) {
                console.log("User exists with this email");
                return res.status(400).json({ success: false, message: "Email is already taken by another user" });
            } else {
                // Update user with OTP and other details
                const securepassword = await bcrypt.hash(password, 10);
                isverifyemail.password = securepassword;
                isverifyemail.verifycode = verifycode;
                isverifyemail.expirycode = new Date(Date.now() + 360000); // 1 hour expiry
                isverifyemail.mobileno = mobileno;

                const verifiedemail = await isverifyemail.save();
                console.log(verifiedemail);
            }
        } else {
            // New user registration
            const hashedpassword = await bcrypt.hash(password, 10);
            const expirytime = new Date();
            expirytime.setHours(expirytime.getHours() + 1); // 1 hour expiry

            const newuser = new User({
                username,
                email,
                password: hashedpassword,
                verifycode,
                isVarified: false,
                mobileno,
                expirycode: expirytime
            });

            const savenewuser = await newuser.save();
            console.log(savenewuser);
        }

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'techsage.contact@gmail.com', // Your email
                pass: 'jnpd mnoe ijfv xplc',          // Your generated Gmail app password
            },
        });

        // Send OTP email
        const sendOtpEmail = async (email, verifycode, username) => {
            const mailOptions = {
                from: 'techsage.contact@gmail.com', // Your email
                to: email,
                subject: 'Welcome to Robotics World',
                text: `Hello, ${username}. Your OTP for signup is: ${verifycode}`,
            };

            try {
                await transporter.sendMail(mailOptions);
                console.log('OTP sent successfully');
                return res.status(200).json({
                    success: true,
                    message: "Otp sent successfully"
                });
            } catch (error) {
                console.error('Error sending OTP email:', error);
                return res.status(400).json({
                    success: false,
                    message: "Error sending OTP email"
                });
            }
        };

        // Call sendOtpEmail function to send OTP
        await sendOtpEmail(email, verifycode, username);

    } catch (error) {
        console.error("Sign up failed", error);
        return res.status(400).json({
            success: false,
            message: "Sign up failed",
            error
        });
    }
};
