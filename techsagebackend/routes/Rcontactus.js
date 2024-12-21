import express from  "express";
const contactusrouter=express.Router();
import { Contactussave } from "../controllers/ContactusC.js";

contactusrouter.post('/contactussave',Contactussave);

export default contactusrouter;