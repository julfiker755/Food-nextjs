import mongoose from "mongoose";


const cartschema = new mongoose.Schema({
    orderid:{type:String},
    id:{type:String},
    email:{type:String},
    quantity:{type:Number},
    minprice:{type:Number},
    orderitems:{
      Name:{type:String},
      image:{type:String},
      discripation:{type:String},
      price:{type:String},
    }
  }
  );



  const cartModel =mongoose?.models?.carts || mongoose.model('carts',cartschema);

  export default cartModel;
