import mongoose from "mongoose";

const rentcarSchema = new mongoose.Schema({
    rent:{type:String, required:true, trim:true},
    year:{type:Number, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    fuel:{type:String, required:true, trim:true},
    ac:{type:String, required:true, trim:true},
    address:{type:String, required:true, trim:true},
    mobile:{type:String, required:true, trim:true},
    model:{type:String, required:true, trim:true},
    date:{type:Date, default:Date.now}
})

const rentcarModel = mongoose.model("rentcar", rentcarSchema)

export default rentcarModel