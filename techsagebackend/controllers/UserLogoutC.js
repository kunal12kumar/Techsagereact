// Controller for logout
const tokenBlacklist = new Set();
export const logout = async (req, res) => {
  try {
    console.log("Under the userLogout function");
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) {
      console.error("No token provided");
      return res.status(400).json({ message: "No token provided" });
    }
    
    console.log("Token received for logout:", token);
    console.log("Current blacklist before adding token:", Array.from(tokenBlacklist));

    // Add the token to the blacklist
    tokenBlacklist.add(token);

    // console.log("Token added to blacklist. Current blacklist:", Array.from(tokenBlacklist));
    return res.status(200).json({ message: "Logged out successfully" });
    
  } catch (error) {
    console.error("Error in logout function:", error.message);
    return res.status(400).json({ success: false, message: "Error in logout" });
  }
};
