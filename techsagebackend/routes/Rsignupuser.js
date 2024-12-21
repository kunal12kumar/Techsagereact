import express from  "express";
const signuprouter=express.Router();
import { UserSignup } from "../controllers/UsersignupC.js";

// now calling api

signuprouter.post('/usersignup',UserSignup);

export default signuprouter;