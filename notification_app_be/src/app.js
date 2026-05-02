const connectDB=require("./utils/db");
const express=require("express");
const getToken=require("./utils/auth");
const Log=require("./middleware/logger");
const notificationRoutes=require("./routes/notificationRoutes");

const app=express();
app.use(express.json());
app.use("/notifications",notificationRoutes);
connectDB();
app.get("/",(req,res)=>{
    res.send("API running");
})
app.get("/test",async(req,res)=>{
    try{
        const token=await getToken();
        await Log("backend","info","route","Test route hit",token);
        res.json({message:"working"});
    }catch(err){
        console.error(err);
        res.status(500).json({error:"something went wrong"});
    }
});
app.listen(5000,()=>{
    console.log("server running on port 5000");
});