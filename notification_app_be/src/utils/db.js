const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/notifications_db");
        console.log("Database connected");
    }catch(err){
        console.log("Database error",err);
    }
};

module.exports=connectDB;