import express from 'express'
import { CreateConversation, getConversation } from '../Controllers/conversationController.js'

const router = express.Router()
router.post('/', CreateConversation)
router.get('/:userId',getConversation)

export default router