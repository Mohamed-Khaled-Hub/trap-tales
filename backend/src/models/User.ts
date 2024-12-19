import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
// Types
import { FavoritesType, UserModelType, UserType } from '../types/Types'

// Create User Schema
const UserSchema = new Schema(
    {
        email: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        dob: { type: Date },
        bio: { type: String },
        favorites: Array<FavoritesType>,
    },
    { versionKey: false, timestamps: true }
)

// Login Static Function
UserSchema.statics.login = async function (email, password) {
    // Checking if there is a user with this email
    const user = await this.findOne({ email })

    // If user doesn't exists
    if (!user) {
        throw Error('Wrong Email or Password')
    }

    // Compare the entered password and the real password
    const matchHashes = await bcrypt.compare(password, user.password)

    // If it doesn't match
    if (!matchHashes) {
        throw Error('Wrong Email or Password')
    }

    // Return User
    return user
}

// Signup Static Function
UserSchema.statics.signup = async function (
    email: string,
    phone: string,
    password: string,
    name: string,
    dob: Date,
    bio: string
) {
    // Checking if there is a user with this email
    const exists = await this.findOne({ email })

    // If user exists
    if (exists) {
        throw Error('Email already in use')
    }

    // Salt means => if password is 123, it will make it 123jaofiejiofiaoh, it will add extra part to password
    const salt = await bcrypt.genSalt(10)

    // Hashing the password
    const hash = await bcrypt.hash(password, salt)

    // Return the user
    return await this.create({
        email,
        phone,
        password: hash,
        name,
        dob,
        bio,
    })
}

// User Model
export const userModel = model<UserType, UserModelType>('User', UserSchema)
