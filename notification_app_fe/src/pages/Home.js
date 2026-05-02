import React,{useEffect,useState} from "react";
import axios from "axios";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";

function Home() {
  const [notifications,setNotifications]=useState([]);
  const [page, setPage]=useState(1);
  const [type, setType]=useState("");

  const fetchData=async()=>{
    let url=`http://localhost:5000/notifications?page=${page}&limit=5`;
    if(type){
      url+=`&type=${type}`;
    }
    const res=await axios.get(url);
    setNotifications(res.data.data);
  };

  useEffect(()=>{
    fetchData();
  },[page,type]);

  return (
    <div>
      <h2>Notifications</h2>
      <FilterBar setType={setType}/>

      {notifications.map((n)=>(
        <NotificationCard key={n._id} data={n}/>
      ))}

      <div style={{margin:"20px"}}>
        <button onClick={()=>setPage(page-1)}disabled={page===1}>Prev</button>
        <span style={{ margin: "10px" }}>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;