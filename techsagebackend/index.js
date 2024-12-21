import express from "express";
import cors from "cors";
import 'dotenv/config';
import bodyParser from 'body-parser';
import dbconnect from "./lib/dbconnect.js";
import router from "./routes/Ruser.js"






// Initialize the server
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Enable CORS and JSON parsing
server.use(cors());
server.use(express.json());

const database=  dbconnect();
console.log(database);



// Define routes
server.get('/', (req, res) => {
    res.send('Server is ready');
});

// now inroducing the middleware in between 

server.use('/api/Ruser',router);

// Use a different port if 8000 is unavailable
const port = process.env.PORT || 3000; // Default to port 3000 if 8000 is unavailable
// Start the server
server.listen(port, () => {
    console.log(`server connected successufly at http://localhost:${port}`);
  });
  
