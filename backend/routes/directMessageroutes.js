import express from 'express'
import { PostMessages, getMessagecontrols } from '../Controllers/DmControllers.js'

const router =express.Router()

router.post('/',PostMessages)

router.get('/:conversationId',getMessagecontrols)

export default router;