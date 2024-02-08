import Mongoosedatabase from "@/lib/Database";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authoption } from "../auth/[...nextauth]/route";
import userModel from "@/lib/model/Usermodel";

//get 
export async function GET(req){
  try{
   Mongoosedatabase()
   const session=await getServerSession(authoption)
   const email=session?.user?.email
   const result=await userModel.findOne({email})
  return NextResponse.json({status:'success',data:result})

  }catch{
    return NextResponse.json({status:'fail',message:'Data is not update try agin'})
  }
}

// PUT
export async function PUT(req){
   try{
    Mongoosedatabase()
    const data=await req.json()
    console.log(data)
    const session=await getServerSession(authoption)
    const email=session?.user?.email
    const filter = {email:email};
    const options = { upsert: true };
    const updateDoc = {
      $set:{
        name:data.name,
        phone:data.phone,
        address:data.address,
        isadmin:data.isadmin
      }
    };

   const result=await userModel.updateOne(filter, updateDoc, options)
   return NextResponse.json({status:'success',data:result})

   }catch{
     return NextResponse.json({status:'fail',message:'Data is not update try agin'})
   }
}