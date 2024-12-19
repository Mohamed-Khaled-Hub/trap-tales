import axios from 'axios'
import dotenv from 'dotenv'
import { sign } from 'jsonwebtoken'
import { ObjectId } from 'mongoose'

// Load .env file
dotenv.config()

export const getTokenGenius = async () => {
    return await axios
        .post(
            'https://api.genius.com/oauth/token',
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.GENIUS_CLIENT_ID!,
                client_secret: process.env.GENIUS_CLIENT_SECRET!,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        .then((result) => result.data.access_token)
        .catch((err) => err)
}

export const getTokenSpotify = async () => {
    return await axios
        .post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.SPOTIFY_CLIENT_ID!,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        .then((result) => result.data.access_token)
        .catch((err) => console.log(err))
}

export const getTokenJWT = (_id: ObjectId) => {
    return sign({ _id }, process.env.JWT_SECRET!, { expiresIn: '3d' })
}
