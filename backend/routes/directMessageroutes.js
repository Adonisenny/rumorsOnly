import express from 'express'
import { DmControllers, getMessageControl, getallMessagecontrols } from '../Controllers/DmControllers'
import { getCommentControl } from '../Controllers/commentController'
const router =express.Router()

router.post('/',DmControllers)
router.get('/directmessages',getallMessagecontrols)
router.get('/:theid',getMessageControl)