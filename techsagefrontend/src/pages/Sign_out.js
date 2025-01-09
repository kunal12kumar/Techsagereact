import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const LogoutButton = () => {
  const navigate = useNavigate();
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
       <ToastContainer />
       <div>
        <button onClick={handleLogout} className=" flex justify-center items-center border-[2px] border-black w-[200px] h-[50px] bg-red">Log Out</button>
       </div>
    </div>
   
    
  );
};

export default LogoutButton;