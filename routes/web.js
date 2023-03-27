import express from 'express'
import Rentcontroller from '../controller/Rentcontroller.js'
import cors from 'cors'

const router = express.Router()

router.get("/", cors() ,(req,res)=>{
    res.send("work")
})
router.post("/book",  Rentcontroller.book)

export default router