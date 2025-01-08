import express from  "express";
const contactusrouter=express.Router();
import { Contactussave } from "../controllers/ContactusC.js";
import { verifyToken } from "../lib/verifytoken.js";

contactusrouter.post('/contactussave',verifyToken,Contactussave);

export default contactusrouter;