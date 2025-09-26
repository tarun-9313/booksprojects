require("dotenv").config()

var express =require("express")

var router = require("./routes/book-routes")

var  ConnectToDatabase = require("./database/db")



var app=express()
// connect to the data base

ConnectToDatabase()

// add the middle ware

app.use(express.json())
app.use("/api/books",router)

var PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log("the server is running");
    
})