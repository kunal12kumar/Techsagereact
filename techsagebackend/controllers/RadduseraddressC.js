
import Address from "../models/UserAddress.js";

// Add a new product
export const addUserAddress = async (req, res) => {
    try {
        const user_id = req.user?.Userexitwiththisemail?._id;
        console.log(user_id)
        if (!user_id) {
            return res.status(400).json({ message: "User ID is missing" });
        }
        const { name, mobile, pincode, locality, address, city, state, landmark, alternate_phone, address_type, } = req.body;
        console.log(req.body)
        console.log(name, mobile, pincode, locality, address, city, state, landmark, alternate_phone, address_type)
        console.log("inside adduserAddress")




        // Create a new product
        const newAddress = new Address({
            user_id,
            name,
            mobile,
            pincode,
            locality,
            address,
            city,
            state,
            landmark,
            alternate_phone
        });

        await newAddress.save();
        res.status(200).json({ message: 'Address added successfully!' });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add Address', error });
    }
};



export const findaddressofUserbyid= async (req,res)=>{

    try {
        console.log("Inside findaddressofUserbyid")

        const user_id = req.user?.Userexitwiththisemail?._id;
        console.log(user_id)
        if (!user_id) {
            return res.status(400).json({ message: "User ID is missing" });
        }

        const AllAddress=await Address.find({user_id});
        console.log(AllAddress)

        console.log("Cart extraceted successfully")

        if (!AllAddress || AllAddress.length === 0) {
            console.log("No address ")
            return res.status(404).json({ success: false, message: "There is no address" });
        }

        res.status(200).json({success:true ,AllAddress, message:"Address Extracted Successfully"})
        
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ success: false, message: "Failed to fetch Address" });
        
    }

}
