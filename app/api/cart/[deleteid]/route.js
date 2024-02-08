import Mongoosedatabase from "@/lib/Database"
import cartModel from "@/lib/model/Cartmodel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

  // delete  ----------
  export async function DELETE(req,{params}){
    try{
        Mongoosedatabase()
      const result=await cartModel.deleteOne({_id:new mongoose.Types.ObjectId(params.deleteid)})
      console.log(result)
       return NextResponse.json({status:'success',data:result})
     
    }catch{
      return NextResponse.json({status:'fail',message:'Data not delete try agin'})
    }
  }