import RecipeReviewCard from "../Components/RecipeReviewCard";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const API_KEY = 'ae1221becf751e60b1187436a02b4662'
const API_ID = "aa99eea4"




const Step2a = () => {
    const [selection, setSelection] = useState()

    
  const fetchData = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=keto&app_id=aa99eea4&app_key=ae1221becf751e60b1187436a02b4662`
    );
    const data = await response.json();
    // setBizfile(data);
    console.log(data);
  };

  return (
    <div style={{backgroundImage: "url('https://i.imgur.com/Lqe3OwY.jpg')", width: '100%', backgroundSize: 'cover'}}>
        <Button variant="contained" onClick={()=> fetchData()}>Test</Button>
      <RecipeReviewCard />
    </div>
  );
};
export default Step2a;