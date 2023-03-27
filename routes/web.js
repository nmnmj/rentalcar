import express from 'express'
import Rentcontroller from '../controller/Rentcontroller.js'

const router = express.Router()

router.get("/", (req,res)=>{
    res.send("work")
})
router.post("/book",  Rentcontroller.book)

export default router