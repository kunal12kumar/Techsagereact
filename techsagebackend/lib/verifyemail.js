// import VerificationEmail from '../Emails/Verificationemail.js';
import { resend } from './resend.js';

export async function veriyemail(

    email,
    verifycode,
    username

) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'mrkunalkr01@gmail.com',
            subject: 'Hello world',
            html: `<p>${username}, your OTP for signup is <strong>${verifycode}</strong></p>`
        });

        if (error) {
            console.log(error)
            return { success: false, message: "Email sending failed" }
        }

        return { success: true, message: "Email  send successfully " };
    } catch (error) {
        console.log(error)
        return { success: false, message: "Email verification failed" };
    }
}
