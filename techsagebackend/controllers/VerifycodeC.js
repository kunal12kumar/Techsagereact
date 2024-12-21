import User from "../models/user.js";

export const Verifycode = async (req, res) => {

    try {
        const { username, verifycode } = await req.query
        const decodedUsername = decodeURIComponent(username);
        const user = await User.findOne({ username: decodedUsername });
        console.log(user);

        if (!user) {
            console.log("user not found")
            return res.status(404).json(
                { success: false, message: 'User not found' }
            );
        }

        // Check if the code is correct and not expired
        const isCodeValid = user.verifyCode === verifycode;
        if(!isCodeValid){
            console.log("OTP does not match");
        }
        const isCodeNotExpired = new Date(user.expirycode) > new Date();

        if (isCodeValid && isCodeNotExpired) {
            // Update the user's verification status
            user.isVarified = true;
            await user.save();

            return res.status(200).json(
                { success: true, message: 'Account verified successfully' }
            );
        } else if (!isCodeNotExpired) {
            // Code has expired
            return res.status(400).json(
                {
                    success: false,
                    message:
                        'Verification code has expired. Please sign up again to get a new code.',
                }
            );
        } else {
            // Code is incorrect
            return res.status(400).json(
                { success: false, message: 'Incorrect verification code' }
            );
        }
    } catch (error) {
        console.error('Error verifying user:', error);
        return res.status(500).json(
            { success: false, message: 'Error verifying user' }
        );
    }

}