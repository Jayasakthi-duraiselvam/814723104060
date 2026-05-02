const express=require("express");
const router=express.Router();
const Notification=require("../models/Notification");

router.post("/send",async(req,res)=>{
  try{
    const {studentId,type,message}=req.body;
    const newNotification=await Notification.create({
      studentId,
      type,
      message
    });
    res.json({
        succes:true,
        data:newNotification
    });
  }catch(err){
    console.error(err);
    res.status(500).json({error:"Error creating notification"});
  }
});

router.get("/",async(req,res)=>{
    try{
        const {page=1,limit=5,type}=req.query;
        let filter={};
        if(type){
            filter.type=type;
        }

        const notifications=await Notification.find(filter)
        .sort({createdAt:-1})
        .skip((page-1)*limit)
        .limit(Number(limit));
        
        res.json({
            success:true,
            count:notifications.length,
            data:notifications
        });
    }catch(err){
        console.error(err);
        res.status(500).json({error:"error fetching notifications"});
    }
});

router.post("/read",async(req,res)=>{
    console.log("api hit");
    try{
      const {id}=req.body;
      const updatedNotification=await Notification.findByIdAndUpdate(
        id,
        {isRead:true},
        {new:true}
      );
  
      res.json({
        success:true,
        data:updatedNotification
      });
  
    } catch(err){
      console.error(err);
      res.status(500).json({error:"Error updating notification"});
    }
  });
module.exports=router;