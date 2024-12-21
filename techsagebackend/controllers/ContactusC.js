// here we define to store the details of the person for query
import contactusdetails from "../models/contactus.js";

export const Contactussave= async (req,res)=>{

    try{
        const {name,email,mobileno ,query}= req.body;
        console.log(name);
        console.log(email);
        console.log(mobileno);
        console.log(query);



        const newcontactusdetails = new contactusdetails({
            name,
            email,
            mobileno,
            query

        })

        const savenewcontactusdetails = await newcontactusdetails.save();

        console.log(savenewcontactusdetails);

        return res.status(200).json({success:true , message:"contact details saved"})

    }
    catch(error){
        console.error("Contact Detais saving process failed", error);
        console.log(error);

        return res.status(400).json({
            success: false,
            message: "Saving Failed",
            error
        })


    }


}