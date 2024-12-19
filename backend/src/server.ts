import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connect } from 'mongoose'
// Routers
import { spotifyRouter } from './routers/SpotifyRouter'
import { geniusRouter } from './routers/GeniusRouter'
import { usersRouter } from './routers/UserRouter'
// Middlewares
import { requestLog } from './middlewares/requestLog'
// Load .env file
dotenv.config()

// Initialize Express
const app = express()

// Convert request to JSON
app.use(express.json())

// Solving 'no-cors' request problem
app.use(
    cors({
        origin: [`${process.env.WEBSITE_URL}`],
        optionsSuccessStatus: 200,
    })
)

// Logging Middleware
app.use(requestLog)

// Using Routes
app.use('/spotify', spotifyRouter)
app.use('/genius', geniusRouter)
app.use('/user', usersRouter)

// Connect to MongoDB
connect(process.env.MONGODB_URI!).then(() => {})

// Start listening
app.listen(process.env.PORT, () => {})
