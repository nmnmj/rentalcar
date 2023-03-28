import rentcarModel from "../model/rentcar.js"

class Rentcontroller{
    static book= async (req, res)=>{
        const {rent, year}= req.body
        try {
            const doc = new rentcarModel(req.body)
            const r = await doc.save()

            res.send({"email":await r.email})

            // console.log(email)
        } catch (error) {
            res.status(204).send({"status":"error"})
        }
    }
}

export default Rentcontroller