import express from 'express'
import { createCommentsComments, getallcommentcommentcontrols, getcommentcommentControl } from '../Controllers/commentcommentcontrollers.js'

const router = express.Router()

router.post('/', createCommentsComments)
router.get('/:postId', getcommentcommentControl)

router.get('/',getallcommentcommentcontrols)


export default router;