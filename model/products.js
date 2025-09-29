var mongoose=require("mongoose")

var productSchems = new mongoose.Schema({
    title:String,
    price:Number,
    author:String
})

module.exports=mongoose.model("products",productSchems)