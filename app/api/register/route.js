import Mongoosedatabase from "@/lib/Database"
import userModel from "@/lib/model/Usermodel"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

// get
export async  function GET(req){
    try{
      Mongoosedatabase()
      const result=await userModel.find()
      return NextResponse.json({status:'success',data:result})

    }catch{
      return NextResponse.json({status:'fail',message:'Data not found try agin'})
    }
}
// post
export async function POST(req){
  try{
    Mongoosedatabase()
    let body=await req.json()
    // hash passowd
    const hashpassword=body.password
    const salt = bcrypt.genSaltSync(10);
    body.password= bcrypt.hashSync(hashpassword, salt)

    const result=await userModel.create(body) 
    return NextResponse.json({status:'success',data:result})
    

  }catch{
    return NextResponse.json({status:'fail',message:'Data not fetching try agin'})
  }
}
