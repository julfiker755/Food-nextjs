import mongoose from "mongoose";


const shopschema = new mongoose.Schema({
    Name:{type:String},
    Image:{type:String},
    discripation:{type:String},
    price:{type:Number},
  },{timestamps:true}
  );



  const shopModel =mongoose?.models?.shops || mongoose.model('shops',shopschema);

  export default shopModel;
