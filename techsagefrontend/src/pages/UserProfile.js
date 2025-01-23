import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { ToastContainer,toast } from "react-toastify";

// defining the userfunction 

export default function UserProfile() {

    const [userInfo, setUserInfo] = useState(null);
    const [user, setUser] = useState({});
    const [addresses, setAddresses] = useState([]);
    const [orders, setOrders] = useState([]);

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

        fetchUserData();
    }, [navigate]);

    // Render loading or user information
    if (!userInfo) {
        return <div>Loading...</div>;
    }
    // for logout button

    const handleLogout = () => {
        // Remove the token from localStorage

        localStorage.removeItem("token");

        // Optionally clear other user-related data from storage
        localStorage.removeItem("user");

        // Navigate to the login page
        navigate("/log_in");

        // Optionally, show a message
        toast.success("You have been logged out!");
    };

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
                        <ul>
                            {addresses.map((address, index) => (
                                <li key={index} className="mb-2">
                                    {address}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No addresses added</p>
                    )}
                    <button className="text-blue-500 mt-2">+ Add Address</button>
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