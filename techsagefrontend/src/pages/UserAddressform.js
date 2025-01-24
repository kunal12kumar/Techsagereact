import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AddressForm = () => {
    const indianStates = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi",
        "Jammu and Kashmir",
        "Ladakh",
        "Lakshadweep",
        "Puducherry",
    ];



    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
        state: "",
        landmark: "",
        alternate_phone: "",

    });

    const [location, setLocation] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [error, setError] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate()

    const getlivelocation = async () => {

        try {

            // Get token from localStorage
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/log_in"); // Redirect to login if no token found
                return;
            }

            try {
                // Decode the token
                const decoded = jwtDecode(token);
                setUserInfo(decoded); // Set the decoded user information in state
            } catch (error) {
                console.error("Invalid token:", error);
                navigate("/log_in"); // Redirect to login if token is invalid or expired
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });

                        try {
                            const response = await axios.post("http://localhost:9000/api/RAddtocart/getlivelocation", {
                                lat: latitude,
                                lng: longitude,
                            }, {
                                headers: {
                                    Authorization: `Bearer ${token}`, // Send the token in the header
                                },
                            });
                            setPincode(response.data.pincode);
                            setError(""); // Clear errors if successful
                        } catch (err) {
                            console.error("Error fetching pincode:", err);
                            setError("Unable to fetch pincode. Try again later.");
                        }
                    },
                    (err) => {
                        console.error("Error getting location:", err);
                        setError("Location access denied. Enable location services.");
                    }
                );
            } else {
                setError("Geolocation is not supported by your browser.");
            }



        } catch (error) {

            console.log(error)

        }
    }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log("Form submitted:", formData);
        console.log(formData.name)
        // now calling the api to send the otp and verifying the user to save into the database


        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/log_in");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            setUserInfo(decoded);
        } catch (err) {
            console.error("Invalid token:", err);
            navigate("/log_in");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/RAdduseraddress/addinguseraddress', {
                name: formData.name,
                mobile: formData.mobile,
                pincode: formData.pincode,
                locality: formData.locality,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                landmark: formData.landmark,
                alternate_phone: formData.alternate_phone,

            },
                { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } });
            console.log(response);

            if (response.status === 200) {
                const token = response.data.token
                localStorage.setItem("token", token);   //storing token in localStorage to use it latter
                console.log(token)
                toast.success(response.data.message);

            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to save the data');
            console.log(error);
        }


        setFormData({
            name: "",
            mobile: "",
            pincode: "",
            locality: "",
            address: "",
            city: "",
            state: "",
            landmark: "",
            alternate_phone: "",




        })




    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-[] shadow-lg rounded-lg">
            <ToastContainer></ToastContainer>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Manage Addresses</h1>
            <form onSubmit={handleSubmit}>
                <button
                    type="button"
                    className="w-full py-2 mb-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
                >
                    Use my current location
                </button>
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg border-[2px] border-blue-600 p-2"
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength="10"
                        pattern="[0-9]{10}"
                        required
                        className="rounded-lg border-[2px] border-blue-600 p-2"
                    />
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="rounded-lg border-[2px] border-blue-600 p-2"
                    />
                    <input
                        type="text"
                        name="locality"
                        placeholder="Locality"
                        value={formData.locality}
                        onChange={handleChange}
                        required
                        className="rounded-lg border-[2px] border-blue-600 p-2"
                    />
                    <textarea
                        name="address"
                        placeholder="Address (Area and Street)"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="rounded-lg border-[2px] border-blue-600 p-2 h-24"
                    ></textarea>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="city"
                            placeholder="City/District/Town"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="rounded-lg border-[2px] border-blue-600 p-2"
                        />
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="rounded-lg border-[2px] border-blue-600 p-2"
                        >
                            <option value="" disabled>
                                Select State
                            </option>
                            {/* Add state options here */}
                            {indianStates.map((state, index) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}

                        </select>
                    </div>
                    <input
                        type="text"
                        name="landmark"
                        placeholder="Landmark (Optional)"
                        value={formData.landmark}
                        onChange={handleChange}
                        className="rounded-lg border-[2px] border-blue-600 p-2"
                    />
                    <input
                        type="tel"
                        name="alternate_phone"
                        placeholder="Alternate Phone (Optional)"
                        value={formData.alternate_phone}
                        onChange={handleChange}
                        className="rounded-lg border-[2px] border-blue-600 p-2"
                    />

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="py-2 px-6 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddressForm;
