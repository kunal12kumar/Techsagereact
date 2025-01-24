import mongoose from "mongoose";
const AddressSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],
    },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'],
      match: [/^\d{6}$/, 'Please enter a valid 6-digit pincode'],
    },
    locality: {
      type: String,
      required: [true, 'Locality is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City/District/Town is required'],
      trim: true,
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
    },
    landmark: {
      type: String,
      trim: true,
      default: '', // Default to an empty string for optional field
    },
    alternate_phone: {
      type: String,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit alternate phone number'],
      default: '', // Default to an empty string for optional field
    }
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  });

const Address = (mongoose.models.Address ) || (mongoose.model('Address', AddressSchema));
export default  Address;