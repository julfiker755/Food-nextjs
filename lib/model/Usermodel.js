import mongoose from "mongoose";


const Userschema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String},
    address:{type:String},
    isadmin:{type:Boolean}
  },{timestamps:true}
  );



  const userModel =mongoose?.models?.users || mongoose.model('users',Userschema);

  export default userModel;
