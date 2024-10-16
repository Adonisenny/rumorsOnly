import express from 'express'
import { CommentController, deleteCommentControls, getCommentControl, getProfileComment, getallCommentcontrols, updateCommentLikes } from '../Controllers/commentController.js';

const router = express.Router()

router.post('/', CommentController)
router.get('/:myid', getCommentControl)
router.get('/', getallCommentcontrols)
router.delete('/:id',deleteCommentControls)
router.put("/:id/like",updateCommentLikes)
router.get("/profilecomment/:theId",getProfileComment )

export default router;