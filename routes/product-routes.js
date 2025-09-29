var express=require("express")
var{getAllProducts,getSingleProduct,addNewProduct,updateProduct,deleteProduct}=require("../controllers/product-controller")

var router=express.Router()



router.get("/products",getAllProducts)

router.get("/products/:id",getSingleProduct)

router.post("/add",addNewProduct)

router.put("/add/:id",updateProduct)

router.delete("/delete/:id",deleteProduct)

module.exports=router