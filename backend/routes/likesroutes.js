import express from 'express'
import { GetLiked } from "../Controllers/likesController.js";

const router = express.Router()

// router.post("/:postID", createLikesControls)
// router.get("/:postID", checkLikesControls)
router.get("/:userId", GetLiked)


export default router