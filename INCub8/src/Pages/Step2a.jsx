import RecipeReviewCard from "../Components/RecipeReviewCard";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { height } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_ID = import.meta.env.VITE_API_ID;

const Step2a = () => {
  const [selection, setSelection] = useState();
  const [searchterm, setSearchterm] = useState("")

  const handleSearchTerm =(event)=>{
    event.preventDefault()
    setSearchterm(event.target.value)
    console.log("Search Term",event.target.value)
  }



  const fetchData = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}&diet=high-protein&health=Mediterranean&cuisineType=Asian&mealType=Dinner&dishType=Main%20course&imageSize=REGULAR`
    );
    const data = await response.json();
    setSelection(data);
  };
  // console.log(selection);
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://i.imgur.com/Lqe3OwY.jpg')",
          width: "100%",
          backgroundSize: "cover",
          position: "absolute",
          top: "0px",
          height: "150%",
          zIndex: "-1",
        }}
      ></div>
      <Box
        component="form"
        sx={{
          width: 300,
          height: 500,
          backgroundColor: "black",
          opacity: [0.9, 0.8, 0.7],
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          required
          variant="filled"
          id="search"
          label="Begin Search"
          onChange={handleSearchTerm}
          sx={{
            zIndex: "1",
            backgroundColor: 'white'
          }}
        />
        <Button variant="contained" onClick={() => fetchData()}>
          Test
        </Button>
      </Box>
      <div>
        
        {selection.map((x,index)=> <RecipeReviewCard key={index} dish={x} />)}
      </div>
    </div>
  );
};
export default Step2a;
