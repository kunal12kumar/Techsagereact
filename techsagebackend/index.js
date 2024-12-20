import express from "express";
import cors from "cors";
import 'dotenv/config';


// initializing the server

const server=express();

server.get('/',(req,res)=>{
    res.send('Server is ready');

})

const port =process.env.PORT ||5000;

// STARTING THE SERVER

server.listen(port,()=>{
    console.log(`server created successfully at http://localhost:${port}`)
});
