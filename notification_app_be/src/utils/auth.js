const axios=require("axios");

async function getToken(){
    const res=await axios.post(
        "http://20.207.122.201/evaluation-service/auth",
        {
            email:"814723104060@trp.srmtrichy.edu.in",
            name:"Jayasakthi",
            rollNo:"814723104060",
            accessCode:"QkbpxH",
            clientID:"947fc634-ad55-4d64-8cd8-c6537370ac5e",
            clientSecret:"vceamrkwnWdRyJbF"
        }
    );
    return res.data.access_token;
}

module.exports=getToken;