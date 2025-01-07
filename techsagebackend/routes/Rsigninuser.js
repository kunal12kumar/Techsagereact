import express from  "express";
const signinrouter=express.Router();
import { Usersignin } from "../controllers/UsersigninC.js";

// now calling api

signinrouter.post('/usersignin',Usersignin);

export default signinrouter;