import jwt from "jsonwebtoken"

const SECRET_KEY=process.env.SECRET_KEY

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Token required" });
  
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid or expired token" });
      
      // Attach user data to request for later use
      req.user = user; 
      next(); // Pass control to the next middleware or route handler
    });
  };
