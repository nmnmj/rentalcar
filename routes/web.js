import express from 'express'
import Rentcontroller from '../controller/Rentcontroller.js'
import rentcarModel from '../model/rentcar.js';

const router = express.Router()

router.get("/" ,async (req,res)=>{
    const r = await rentcarModel.find();

    res.send(r)
})
router.post("/",(req,res)=>{
    const {rent, year, email, fuel, ac, address, mobile, model}= req.body
    res.send({"year":year, "model":model})
})
router.post("/book" , Rentcontroller.book)

export default router