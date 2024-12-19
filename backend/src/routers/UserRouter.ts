import { Router } from 'express'
// Controllers
import { loginUser, signupUser } from '../controllers/UserController'

// Creating Router
export const usersRouter = Router()

usersRouter.post('/login', loginUser)

usersRouter.post('/signup', signupUser)
