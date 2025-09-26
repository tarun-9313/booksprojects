var express=require("express")

var router=express.Router()

var{getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook}=require("../controllers/books-controller")


router.get("/get",getAllBooks)

router.get("/get/:id",getSingleBook)

router.post("/add",addNewBook)

router.put("/add/:id",updateBook)

router.delete("/delete/:id",deleteBook)

module.exports=router