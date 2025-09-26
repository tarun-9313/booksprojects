
var books=require("../model/books")


var getAllBooks=async(req,res)=>{
 var allBooks=await books.find()
    res.status(200).json(allBooks)
}

var getSingleBook=async(req,res)=>{
    var bookId=req.params.id 
    var myBook= await books.findById(bookId)
    res.status(200).json(myBook)

}
var addNewBook=async(req,res)=>{
    var formData=req.body
    var newBook=await books.create(formData)
    if(newBook){
        res.status(201).json(newBook)
    }else{
        res.status(404).json({message:"cannot create a book"})
    }

}
var updateBook=async(req,res)=>{
    var update=req.body
    var bookId=req.params.id
    var mybook=await books.findByIdAndUpdate(bookId,update)
    if(mybook){
        res.status(201).json(mybook)
    }else{
        res.status(404).json({message:"cannot update a book"})
    }

}
var deleteBook=async(req,res)=>{
    var bookId=req.params.id
    var myBook=await books.findByIdAndDelete(bookId)
    res.status(201).json(myBook)

    
}
module.exports={getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook}