import express from 'express'
import { CommentController, deleteCommentControls, getCommentControl, getallCommentcontrols, updateCommentLikes } from '../Controllers/commentController.js';

const router = express.Router()

router.post('/', CommentController)
router.get('/:id', getCommentControl)
router.get('/', getallCommentcontrols)
router.delete('/:id',deleteCommentControls)
router.put("/:id/like",updateCommentLikes)

export default router;