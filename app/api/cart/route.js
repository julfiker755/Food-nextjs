import Mongoosedatabase from "@/lib/Database";
import cartModel from "@/lib/model/Cartmodel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authoption } from "../auth/[...nextauth]/route";
import mongoose from "mongoose";

// get  ----------
export async function GET(req){
  const session=await getServerSession(authoption)
  const email=session?.user?.email
    try{
      Mongoosedatabase()
      const result=await cartModel.find({email:email})
       return NextResponse.json({status:'success',data:result})
     
    }catch{
      return NextResponse.json({status:'fail',message:'Data not fetching try agin'})
    }
  }

// post  ---------
export async function POST(req){
    try{
      const session=await getServerSession(authoption)
      const email=session?.user?.email
      Mongoosedatabase()
      let body=await req.json()
      const exsis=await cartModel.findOne({
        $and:[
        {orderid:body?.orderid},
        {email:email},
        ]})
      if(!exsis){
        const result=await cartModel.create(body) 
        return NextResponse.json({status:'success',data:result})
      }
      return NextResponse.json({status:'exsis',data:'Alreay cart added'})
      
  
    }catch{
      return NextResponse.json({status:'fail',message:'Data not fetching try agin'})
    }
  }



  // PUT -----------
  export async function PUT(req){
     const data=await req.json()
      try{
        Mongoosedatabase()
        // increment quintity
        if(data.type === "increment"){
          const result =await cartModel.updateOne({_id:new mongoose.Types.ObjectId(data.increid)},
             {$inc: {quantity:1} }
            )
            // update price increment
            if(result.modifiedCount > 0){
              const findonedata=await cartModel.findOne({_id:new mongoose.Types.ObjectId(data.increid)})
              const filter ={_id:new mongoose.Types.ObjectId(data.increid)}
              const options = { upsert: true };
              const updateDoc = {
                $set:{
                  'orderitems.price':parseInt(findonedata?.orderitems?.price)+parseInt(findonedata?.minprice),
                }
              };
              const priceupdate=await cartModel.updateOne(filter, updateDoc, options)
              return NextResponse.json({status:'success',data:priceupdate})
            }

        //  decrement quintity
        }else if(data.type === "decrement"){
         const  result =await cartModel.updateOne({_id:new mongoose.Types.ObjectId(data.increid)},
          {$inc: {quantity:-1} }
         )
        //  update price decrement
         if(result.modifiedCount > 0){
          const findonedata=await cartModel.findOne({_id:new mongoose.Types.ObjectId(data.increid)})
          const filter ={_id:new mongoose.Types.ObjectId(data.increid)}
          const options = { upsert: true };
          const updateDoc = {
            $set:{
              'orderitems.price':parseInt(findonedata?.orderitems?.price)-parseInt(findonedata?.minprice),
            }
          };
          const priceupdate=await cartModel.updateOne(filter, updateDoc, options)
          return NextResponse.json({status:'success',data:priceupdate})
        }
        }
       
        
       
      }catch(err){
        return NextResponse.json({status:'fail',message:err.toString()})
      }
    }

