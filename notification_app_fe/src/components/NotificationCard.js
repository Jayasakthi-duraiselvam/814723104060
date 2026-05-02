import React from "react";

function NotificationCard({data}){
  return(
    <div style={{
      border:"1px solid #ccc",
      padding:"10px",
      margin:"10px",
      borderRadius:"8px",
      backgroundColor:data.isRead? "#f5f5f5":"#e6f7ff"
    }}>
      <h4>{data.type}</h4>
      <p>{data.message}</p>
      <small>{new Date(data.createdAt).toLocaleString()}</small>
    </div>
  );
}

export default NotificationCard;