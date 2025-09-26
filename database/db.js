var mongoose=require("mongoose")

async function ConnectToDatabase(){
    try{
        await mongoose.connect(process.env.MONG0_URL)
        console.log("connected to the data base");
        
    }catch(error){
        console.log(error);
        

    }
}
module.exports=ConnectToDatabase