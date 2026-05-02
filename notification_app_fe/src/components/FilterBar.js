import React from "react";

function FilterBar({setType}){
  return(
    <div style={{margin:"10px"}}>
      <button onClick={()=>setType("")}>All</button>
      <button onClick={()=>setType("Placement")}>Placement</button>
      <button onClick={()=>setType("Result")}>Result</button>
      <button onClick={()=>setType("Event")}>Event</button>
    </div>
  );
}

export default FilterBar;