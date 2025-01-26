import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";

// defining the userfunction 

export default function UserProfile() {

    const [userInfo, setUserInfo] = useState(null);
    const [user, setUser] = useState({});
    const [addresses, setAddresses] = useState([]);
    const [orders, setOrders] = useState([]);
    const [location, setLocation] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [error, setError] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        // Get token from localStorage
        const token = localStorage.getItem("token");
        console.log(token)

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

        // Fetch user, addresses, and orders on load
        const fetchUserData = async () => {

            try {
                const ordersData = await axios.get("/api/orders");
                setOrders(ordersData.data);

            } catch (error) {

                console.log("error from order section", error)

            }

        };


        const fetchuseraddress = async () => {


            try {
                const response = await axios.get("http://localhost:8000/api/RAdduseraddress/getalladdressofuser", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })

                console.log(response);
                if (response.status === 200) {
                    setAddresses(response.data.AllAddress || []);

                }


            } catch (error) {
                console.log(error)

            }
        }


        fetchUserData();
        fetchuseraddress();

    }, [navigate]);




    // Render loading or user information
    if (!userInfo) {
        return <div>Loading...</div>;
    }
    // for logout button

    const handleLogout = async () => {
        const API_BASE_URL = process.env.REACT_APP_API_URL


        try {
            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("No token found for logout.");
                return;
            }

            // Send the logout request to the backend
            const response = await axios.post(`${API_BASE_URL}/RUserlogout/logout`,
                {}, // Empty body
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Clear localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            // Optionally, show a message



            // Navigate to the login page
            // navigate("/log_in");
            // console.log(response.data.message);
            navigate("/", { state: { message: "You have been logged out!" } });


            // Show success message

        } catch (error) {
            console.error("Logout error:", error);
            toast.error("An error occurred during logout. Please try again.");
        }
    };


    // Now to check the location of the user or they can give there location itself
    const getlivelocation = async () => {
        const API_BASE_URL = process.env.REACT_APP_API_URL

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
                        console.log(latitude,longitude)
                        setLocation({ latitude, longitude });

                        try {
                            const response = await axios.post(`${API_BASE_URL}/RAdduseraddress/getlivelocation`, {
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




    return (
        <div>
            <Header></Header>
            <ToastContainer></ToastContainer>

            <div className="pt-48 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>

                {/* Profile Info */}
                <div className=" border-white border-[2px] shadow-md rounded-md p-4 mb-6">
                    <div>
                        <span className="font-bold">Name:</span>
                        <span className="ml-2">{userInfo.username}</span>
                    </div>
                    <div>
                        <span className="font-bold">Email:</span>
                        <span className="ml-2">{userInfo.email}</span>
                    </div>
                </div>

                {/* Addresses Section */}
                <div className="border-white border-[2px] shadow-md rounded-md p-4 mb-6">
                    <h2 className="text-xl font-bold mb-2">Addresses</h2>

                    {addresses.length > 0 ? (
                        addresses.map((address, index) => (
                            <div
                                key={address._id || index}
                                className="border rounded-lg shadow p-4 mb-4 flex justify-between items-start"
                            >
                                <div>
                                    <h2 className="text-lg font-bold">{address.name}</h2>
                                    <p className="text-sm text-gray-600">{address.mobile}</p>
                                    <p className="mt-2">
                                        {address.address}, {address.locality}, {address.city}, {address.state} -{" "}
                                        <strong>{address.pincode}</strong>
                                    </p>
                                </div>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No addresses added</p>
                    )}

                    <button onClick={() => { navigate('/profile/addAddress') }} className="text-blue-500 mt-2">+ Add Address</button>
                    <div className="border w-[90%] border-gray-300 rounded-md px-4 py-3">
                        <p>Enter your PIN code to check delivery options.</p>
                        <div className="mt-2 flex gap-3">
                            <input
                                type="text"
                                placeholder="Enter PIN code"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                                Check
                            </button>
                        </div>
                        <div className="p-6 max-w-md mx-auto text-center bg-gray-50 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Find Your Pincode</h2>
                            <button
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                                onClick={getlivelocation}
                            >
                                Check
                            </button>
                            {pincode && (
                                <p className="mt-4 text-green-600 font-semibold">
                                    Your Pincode is: <span className="font-bold">{pincode}</span>
                                </p>
                            )}
                            {error && (
                                <p className="mt-4 text-red-600 font-semibold">
                                    Error: {error}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Orders Section */}
                <div className="border-white border-[2px] shadow-md rounded-md mb-6 p-4">
                    <h2 className="text-xl font-bold mb-2">Orders</h2>
                    {orders.length > 0 ? (
                        <ul>
                            {orders.map((order, index) => (
                                <li key={index} className="mb-2">
                                    <span className="font-bold">Order ID:</span> {order._id}
                                    <br />
                                    <span className="font-bold">Product:</span> {order.productName}
                                    <br />
                                    <span className="font-bold">Price:</span> ${order.price}
                                    <br />
                                    <span className="font-bold">Status:</span> {order.status}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No orders found</p>
                    )}
                </div>

                <div onClick={handleLogout} className="border-white cursor-pointer border-[2px] flex justify-center items-center shadow-md w-[20%] rounded-md p-2 ">
                    Log Out


                </div>
            </div>
        </div>

    )
}