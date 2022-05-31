import React from "react";
import { useEffect, useState } from "react";
import BizCheckList from "./BizCheckList";

const BizCheck = ({ bizName }) => {
  const [bizfile, setBizfile] = useState("");
  const [display, setDisplay] = useState("Begin your Search")

  const fetchData = async () => {
    const response = await fetch(
      `https://data.gov.sg/api/action/datastore_search?resource_id=5ab68aac-91f6-4f39-9b21-698610bdf3f7&q=${bizName}&limit=20`
    );
    const data = await response.json();
    setBizfile(data);
    console.log(data);
  };

useEffect(() => {
    fetchData();
},[bizName]);

  useEffect(() => {
    if( bizName == "") {
        setDisplay("Begin Your Search!")
    } else if (bizfile?.result?.records.length > 0){
        setDisplay(`Businesses with "` + bizName.toUpperCase() + `" in their entity name : ${bizfile?.result?.total}`)
    } else {
        setDisplay("There are no business with that name! Start the first today!")
    }
  },[bizfile]);





  return (
    <div className="BizCheckContainer">
      <h1>BizCheck</h1>
      <div className="BizCheckResult">
       <h3>{display}</h3>
      </div>
      <ol style={{display:'inline-block'}}>
      {bizfile?.result?.records.map((x,index)=> <BizCheckList key={index} company={x}/>)}
      </ol>
      <h4>-------  {bizfile?.result?.records.length} of {(bizfile?.result?.total>1)?bizfile?.result?.total:0}  -------</h4>
    </div>
  );
};
export default BizCheck;
