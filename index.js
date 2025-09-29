require("dotenv").config()

var express =require("express")
var cors=require("cors")

var router = require("./routes/book-routes")
var router = require("./routes/product-routes")

var  ConnectToDatabase = require("./database/db")



var app=express()
// connect to the data base

ConnectToDatabase()

// add the middle ware

app.use(express.json())
app.use(cors())
app.use("/api/books",router)
app.use("/api/products",router)

var PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log("the server is running");
    
})