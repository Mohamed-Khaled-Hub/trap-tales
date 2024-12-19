import { Request, Response } from 'express'
// Models
import { userModel } from '../models/User'
// Tokens
import { getTokenJWT } from './TokensController'

// Public Requests
export const loginUser = async (req: Request, res: Response) => {
    // Getting Keys We Need
    const { email, password } = req.body

    try {
        // Login User
        const loginUser = await userModel.login(email, password)
        // Create Token
        const token = getTokenJWT(loginUser._id)
        // Return User
        res.status(200).json({
            name: loginUser.name,
            _id: loginUser._id,
            token,
        })
    } catch (err) {
        res.status(400).send(err)
    }
}

export const signupUser = async (req: Request, res: Response) => {
    // Getting Keys We Need
    const { email, phone, password, name, dob, bio } = req.body

    // Add User Into Database
    try {
        // Create User
        const createUser = await userModel.signup(
            email,
            phone,
            password,
            name,
            dob,
            bio
        )
        // Create Token
        const token = getTokenJWT(createUser._id)
        // Return User
        res.status(200).send({
            name,
            _id: createUser._id,
            token,
        })
    } catch (err) {
        res.status(400).send(err)
    }
}
