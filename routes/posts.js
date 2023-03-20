import express from "express";
import {getFeedPosts,getUserPosts,likePost} from "../controllers/posts.js";
import { verifytoken } from "../middleware/auth.js";


const router =express.Router();


//---------------------READ_------------

router.get("/",verifytoken,getFeedPosts);
router.get("/:user/posts",verifyToken,getUserPosts)

//----------------------UPDATE---------------
router.patch(":id/like",verifytoken,likepost);

export default router;