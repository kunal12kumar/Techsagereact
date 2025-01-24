import express from "express";
const addAddressrouter=express.Router()
import { addUserAddress, findaddressofUserbyid } from "../controllers/RadduseraddressC.js";
import { verifyToken } from "../lib/verifytoken.js";
addAddressrouter.post('/addinguseraddress',verifyToken,addUserAddress);
addAddressrouter.get('/getalladdressofuser',verifyToken,findaddressofUserbyid);
export default addAddressrouter;