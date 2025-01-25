// this also contain the fuction of live location 
import Address from "../models/UserAddress.js";
import axios from "axios"

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

// now get live location and add the address to the current address list 

export const Getlivelocation=async (req, res) => {
    const { lat, lng } = req.body;
    console.log(lat,lng)
  
    if (!lat || !lng) {
      return res.status(400).json({ error: "Latitude and Longitude are required" });
    }
  
    try {
      // Use OpenCage API for reverse geocoding
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          key: process.env.OPENCAGE_API_KEY, // Make sure your API key is available here
          q: `${lat},${lng}` // Query with latitude and longitude
        }
      });
 
  
      const results = response.data.results;
      console.log(results)
      const newpincode = response.data.results[0].components.postcode;
    console.log("Pincode:", newpincode);
  
      // Extract the postal code from the components
      const addressComponent = results
        .flatMap((result) => result.components)
        .find((component) => component.postcode);
  
      const pincode = addressComponent ? addressComponent.postcode : null;
  
      if (pincode) {
        return res.json({ pincode });
      } else {
        return res.status(404).json({ error: "Pincode not found" });
      }
    } catch (error) {
      console.error("Error fetching pincode:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
