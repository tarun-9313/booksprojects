var mongoose=require("mongoose")

var myBookSchems = new mongoose.Schema({
    title:String,
    price:Number,
    isActive:Boolean,
    author:String
})

module.exports=mongoose.model("books",myBookSchems)