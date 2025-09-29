
var products=require("../model/products")

var getAllProducts=async(req,res)=>{
    var allproducts=await products.find()
    res.status(200).json(allproducts)

}
var getSingleProduct=async(req,res)=>{
    var productid=req.params.id
    var myproducts=await products.findById(productid)
    if(myproducts){
        res.status(200).json(myproducts)
    }else{
        res.status(404).json({message:"cannot find"})
    }
        

}
var addNewProduct=async(req,res)=>{
    var newproduct=req.body
    var addproduct=await products.create(newproduct)
    if(addproduct){
        res.status(200).json(addproduct)
    }

}
var updateProduct=async(req,res)=>{
    var update=req.body
    var productid=req.params.id
    var updateProduct=await products.findByIdAndUpdate(productid,update)
    if(updateProduct){
        res.status(200).json(updateProduct)
    }else{
        res.status(404).json({message:"cannot update"})
    }

}
var deleteProduct=async(req,res)=>{
    var productid=req.params.id
    var deleteProduct=await products.findByIdAndDelete(productid)
    res.status(200).json(deleteProduct)

}

module.exports={getAllProducts,getSingleProduct,addNewProduct,updateProduct,deleteProduct}