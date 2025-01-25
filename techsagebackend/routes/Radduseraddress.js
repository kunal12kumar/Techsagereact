import express from "express";
const addAddressrouter=express.Router()
import { addUserAddress, findaddressofUserbyid ,Getlivelocation } from "../controllers/RadduseraddressC.js";
import { verifyToken } from "../lib/verifytoken.js";
addAddressrouter.post('/addinguseraddress',verifyToken,addUserAddress);
addAddressrouter.get('/getalladdressofuser',verifyToken,findaddressofUserbyid);
addAddressrouter.post('/getlivelocation',verifyToken,Getlivelocation);
export default addAddressrouter;