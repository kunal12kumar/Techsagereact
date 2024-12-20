// in this file we will define the schemas by zod verification 

import {z} from "zod";

// here define the validation of the username

export const usernameValidation= z.string()
                           .max(14, "maximum 12 character allowed")
                           .min(8, "minimum 8 character required") 
                           .regex(/^[a-zA-Z0-9._-]{8,14}$/, "Invalid username"
                           )

// now for email

export const emailValidation=z.string()
                              .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,{message:"Invalid email"})

export const signupschema=z.object({
    username:usernameValidation,
    email:emailValidation,
    password:z.string()
              .min(6,{message:"password should not less than 6 character"}),
    mobileno:z.number()
            .min(10,{message:"mobile no should of exact 10 letters"})
            .max(10, {message:"mobile no. should of exact 10 letters"})
    
    
})
    