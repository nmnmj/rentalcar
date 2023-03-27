import express from 'express'
import dotenv  from 'dotenv'
import cookieParser from 'cookie-parser'
import web from './routes/web.js'
dotenv.config()
import connectDB from './db/connectDB.js'
const port = process.env.PORT
const app = express()
import cors from 'cors'
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectDB(process.env.DATABASE_URL)
app.use("/", web)

app.listen(port, ()=>{
    console.log("running")
})