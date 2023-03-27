import rentcarModel from "../model/rentcar.js"

class Rentcontroller{
    static book= async (req, res)=>{
        const {rent, year, email, fuel, ad, address, mobile, model}= req.body
        try {
            const doc = new rentcarModel(req.body)
            const r = await doc.save()

            res.status(201).send({"email":email, "model":model})

            // console.log(email)
        } catch (error) {
            res.status(204).send({"status":"error"})
        }
    }
}

export default Rentcontroller