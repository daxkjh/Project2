import React from "react";
import { useEffect, useState } from "react";

const DomainCheck = ({ bizName }) => {
  const [domainList, setDomainList] = useState("");

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd12d401b3bmsh79274505dc16d9ep1eb0cejsncfae1e01bbe8'
        }
    };
    
    const data = fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=5&pageSize=10&autoCorrect=true', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    setDomainList(data);
  }, [bizName]);

  return (
    <div className="domaincontainer">
      <h1 onClick={()=> console.log(domainList)}>DomainCheck</h1>
      {}
    </div>
  );
};
export default DomainCheck;
