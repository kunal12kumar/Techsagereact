import jwt from "jsonwebtoken";
const tokenBlacklist = new Set();
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.error("No authorization header provided");
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    console.error("Token not found in the authorization header");
    return res.status(401).json({ message: "No token found" });
  }

  console.log("Received token:", token);
  console.log("Current blacklist:", Array.from(tokenBlacklist));

  if (tokenBlacklist.has(token)) {
    console.error("Token has been invalidated");
    return res.status(401).json({ message: "Token has been invalidated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    console.log("Token verified successfully:", req.user);
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.error("Token expired:", error.message);
      return res.status(401).json({ message: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      console.error("Invalid token:", error.message);
      return res.status(401).json({ message: "Invalid token" });
    } else {
      console.error("Token verification failed:", error.message);
      return res.status(500).json({ message: "Token verification error" });
    }
  }
};