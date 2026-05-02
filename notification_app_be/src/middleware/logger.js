const axios=require("axios");
const LOG_API="http://20.207.122.201/evaluation-service/logs";

async function Log(stack,level,pkg,message,token){
    try{
        const response=await axios.post(LOG_API,
            {
                stack:stack,
                level:level,
                package:pkg,
                message:message,
            },
            {
            headers:{
                Authorization:`Bearer ${token}`,
            },
            }
        );
        console.log("Log sent: ",response.data);
    }catch(err){
        console.error("Logging failed: ",err.message);
    }
}

module.exports=Log;