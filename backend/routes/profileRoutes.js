import express from 'express'
import { createProfile, getAllProfile, getProfile, updatedProfile } from '../Controllers/profileControllers.js'

const router = express.Router()
router.post('/', createProfile)
router.get('/',getAllProfile)
router.put('/:id',updatedProfile)
router.get('/:userId', getProfile)
export default router