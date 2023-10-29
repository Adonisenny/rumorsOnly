import express from 'express'
import { createCommentsComments, getallcommentcommentcontrols, getcommentcommentControl, updateCommentCommentLikes } from '../Controllers/commentcommentcontrollers.js'

const router = express.Router()

router.post('/', createCommentsComments)
router.get('/:postId', getcommentcommentControl)

router.get('/',getallcommentcommentcontrols)
router.put("/:id/like",updateCommentCommentLikes)



export default router;