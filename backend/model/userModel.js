const mongoose=require("mongoose");

const Userschema=new mongoose.Schema({

   user:{
    type:String,
    default:"user" ,
    unique: true
   }

},{
    timestamps: true
})

module.exports = mongoose.model("users",Userschema);