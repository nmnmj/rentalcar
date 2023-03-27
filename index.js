import express from 'express'
import cors from 'cors'
import dotenv  from 'dotenv'
import web from './routes/web.js'
dotenv.config()
import connectDB from './db/connectDB.js'
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
const port = process.env.PORT
app.use(express.json())
connectDB(process.env.DATABASE_URL)
app.use("/", web)

app.listen(port, ()=>{
    console.log("running")
})