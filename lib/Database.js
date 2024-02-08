import mongoose from "mongoose"

const Mongoosedatabase=()=>{
    try{
        mongoose.connect(process.env.MONGOOSE_URL)
        .then(()=>{
            console.log('Mongoose connect')
        }).catch(err=>console.log(err.toString()))

    }catch(err){
        console.log(err.toString())
    }
}
export default Mongoosedatabase