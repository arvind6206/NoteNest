import express from 'express'
import userRouter from './routes/user.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/v1/user', userRouter)

async function main(){
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(3000)
    console.log("Server is running on port 3000")

}
main()

