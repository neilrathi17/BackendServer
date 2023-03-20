import express from "express";
import{
    getUser,
    getUserFriend,
    addRemoveFriend,
} from "../controllers/users.js";

import { verifytoken } from './../middleware/auth.js';


const router=express.Router();

//-------------READ----------------
router.get("/:id",verifytoken,getUser);

router.get(":/id/friends",verifytoken,getUserFriend);


//-----------update-------------------------
router.patch("/:id:frienId",verifytoken,addRemoveFriend);


export default router;