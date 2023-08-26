import express from 'express'
import { GetAllUsers, login, logout, register } from '../Controllers/auth.js'
const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.get('/users',GetAllUsers)
export default router;