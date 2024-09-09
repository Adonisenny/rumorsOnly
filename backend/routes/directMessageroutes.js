import express from 'express'
import { PostMessages, getMessageControl, getallMessagecontrols } from '../Controllers/DmControllers.js'

const router =express.Router()

router.post('/',PostMessages)
router.get('/',getallMessagecontrols)
router.get('/:theid',getMessageControl)

export default router;