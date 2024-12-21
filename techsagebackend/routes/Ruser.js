import express from  "express";
const router=express.Router();
import { UserSignup } from "../controllers/UsersignupC.js";

// now calling api

router.post('/usersignup',UserSignup);

export default router