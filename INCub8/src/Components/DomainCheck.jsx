import React from "react";
import { useEffect, useState } from "react";

const DomainCheck = ({ bizName }) => {
  const [domainList, setDomainList] = useState("");

  
  return (
    <div className="domaincontainer">
      <h1 onClick={() => console.log(domainList)}>DomainCheck</h1>
      {}
    </div>
  );
};
export default DomainCheck;
