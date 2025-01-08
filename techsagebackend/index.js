import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import bodyParser from 'body-parser';
import dbconnect from "./lib/dbconnect.js";
import signuprouter from "./routes/Rsignupuser.js";
import verifycoderouter from "./routes/Rverifycode.js";
import contactusrouter from "./routes/Rcontactus.js";
import signinrouter from "./routes/Rsigninuser.js";






// Initialize the server
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Enable CORS and JSON parsing
server.use(cors({ origin: "http://localhost:3000", credentials: true }));
server.use(express.json());

const database=  dbconnect();
console.log(database);



// Define routes
server.get('/', (req, res) => {
    res.send('Server is ready');
});

// defining middleware for verifying token to restrict anauthorized user


// now inroducing the middleware in between 

server.use('/api/Rsignupuser',signuprouter);
server.use('/api/Rverifycode',verifycoderouter);
server.use('/api/Rcontactus',contactusrouter);
server.use('/api/Rsigninuser',signinrouter);

// Use a different port if 8000 is unavailable
const port = process.env.PORT || 3000; // Default to port 3000 if 8000 is unavailable
// Start the server
server.listen(port, () => {
    console.log(`server connected successufly at http://localhost:${port}`);
  });
  
