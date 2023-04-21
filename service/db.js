const mongoose=require("mongoose")
 // connection string

 mongoose.connect("mongodb://127.0.0.1:27017/studentserver",{useNewUrlParser:true})


 //model

 const User = mongoose.model("User",
 {
sname:String,
studentid:Number,
password:String,
balance:Number,
admin:String,
transactions:[]

 }
 )
 const Subin = mongoose.model("Subin",
 {
Date:String,
studentid:Number,
Depname:String,
Reason:String

 }
 )

 module.exports={
    User,Subin
 }