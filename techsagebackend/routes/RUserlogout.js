import express from "express";
const logoutrouter=express.Router();
import { verifyToken } from "../lib/verifytoken.js";
import { logout } from "../controllers/UserLogoutC.js"

logoutrouter.post('/logout',verifyToken,logout)

export default logoutrouter;