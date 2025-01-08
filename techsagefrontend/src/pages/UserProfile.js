import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// defining the userfunction 

export default function UserProfile() {

    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        // Get token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login"); // Redirect to login if no token found
            return;
        }

        try {
            // Decode the token
            const decoded = jwtDecode(token);
            setUserInfo(decoded); // Set the decoded user information in state
        } catch (error) {
            console.error("Invalid token:", error);
            navigate("/login"); // Redirect to login if token is invalid or expired
        }
    }, [navigate]);

    // Render loading or user information
    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (

        <div>
            <h1>{userInfo.username}</h1>
            <h1>{userInfo.email}</h1>
        </div>


    )
}