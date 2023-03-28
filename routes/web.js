import express from 'express'
import Rentcontroller from '../controller/Rentcontroller.js'
import cors from 'cors'

const router = express.Router()

router.get("/", cors() ,(req,res)=>{
    res.send("work")
})
router.post("/",(req,res)=>{
    const {rent, year}= req.body
    res.send({"year":year})
})
router.post("/book", cors() , Rentcontroller.book)

export default router