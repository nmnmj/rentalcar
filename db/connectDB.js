import mongoose from "mongoose";

const connectDB = async(DATABASE_URL)=>{
    const db_options={
        dbName:"carrental"
    }
    try {
        await mongoose.connect(DATABASE_URL, db_options)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB