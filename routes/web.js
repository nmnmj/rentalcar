import express from 'express'
import Rentcontroller from '../controller/Rentcontroller.js'
import rentcarModel from '../model/rentcar.js';

const router = express.Router()

router.get("/" ,async (req,res)=>{
    const r = await rentcarModel.find();

    res.send(r)
})
router.post("/",async (req,res)=>{
    const {rent, year, email, fuel, ac, address, mobile, model}= req.body
    const doc = await new rentcarModel.create(req.body)
    const r = await doc.save()
    res.send({"year":year, "model":model, "email":email})
})
router.post("/book" , Rentcontroller.book)

export default router