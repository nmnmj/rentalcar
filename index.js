import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors({
    origin: 'http://localhost:3000/'
}))
import dotenv  from 'dotenv'
import web from './routes/web.js'
dotenv.config()
import connectDB from './db/connectDB.js'
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB(process.env.DATABASE_URL)
app.use("/", web)

app.listen(port, ()=>{
    console.log("running")
})