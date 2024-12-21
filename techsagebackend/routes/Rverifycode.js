import express from  "express";
const verifycoderouter=express.Router();
import { Verifycode } from "../controllers/VerifycodeC.js";

// now calling api

verifycoderouter.post('/verifycode',Verifycode);

export default verifycoderouter;