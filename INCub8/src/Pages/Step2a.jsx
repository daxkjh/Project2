import RecipeReviewCard from "../Components/RecipeReviewCard";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Box, TextField, Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { height } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_ID = import.meta.env.VITE_API_ID;

const Step2a = () => {
  const [selection, setSelection] = useState();
  const [searchterm, setSearchterm] = useState("");
  const [cuisine, setCuisine] = useState("American");
  const [mealType, setMealType] = useState("Breakfast")



  const handleSearchTerm = (event) => {
    event.preventDefault();
    setSearchterm(event.target.value);
    console.log("Search Term", event.target.value);
  };

  const handleCuisine =(event)=>{
    setCuisine(event.target.value)
  }

  const handleMeal = (event)=>{
    setMealType(event.target.value)
  }

  const fetchData = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchterm}&app_id=${API_ID}&app_key=${API_KEY}&cuisineType=${cuisine}&mealType=${mealType}&imageSize=LARGE`
    );
    const data = await response.json();
    setSelection(data);
    console.log(data);
  };
  // console.log(selection);
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://i.imgur.com/Lqe3OwY.jpg')",
          width: "100%",
          height: "1000px",
          backgroundSize: "contain",
          position: "fixed",
          top: "0px",
          zIndex: "-1",
        }}
      ></div>
      <Box
        component="form"
        sx={{
          position: "relative",
          textAlign: "center",
          width: '100%',
          backgroundColor: "black",
          opacity: [0.9, 0.8, 0.7],
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          required
          variant="filled"
          id="search"
          label="Search Term (Required)"
          onChange={handleSearchTerm}
          sx={{
            zIndex: "1",
            backgroundColor: "white",
          }}
        />
        
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Cuisine Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={cuisine}
          onChange={handleCuisine}
          label="Cuisine Type"
          style={{backgroundColor: 'white', color:"black"}}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={'American'}>American</MenuItem>
          <MenuItem value={'Asian'}>Asian</MenuItem>
          <MenuItem value={'British'}>British</MenuItem>
          <MenuItem value={'Caribbean'}>Caribbean</MenuItem>
          <MenuItem value={'Central%20Europe'}>Central Europe</MenuItem>
          <MenuItem value={'Chinese'}>Chinese</MenuItem>
          <MenuItem value={'Eastern%20Europe'}>Eastern Europe</MenuItem>
          <MenuItem value={'French'}>French</MenuItem>
          <MenuItem value={'Indian'}>Indian</MenuItem>
          <MenuItem value={'Italian'}>Italian</MenuItem>
          <MenuItem value={'Japanese'}>Japanese</MenuItem>
          <MenuItem value={'Kosher'}>Kosher</MenuItem>
          <MenuItem value={'Mediterranean'}>Mediterranean</MenuItem>
          <MenuItem value={'Mexican'}>Mexican</MenuItem>
          <MenuItem value={'Middle%20Eastern'}>Middle Eastern</MenuItem>
          <MenuItem value={'Nordic'}>Nordic</MenuItem>
          <MenuItem value={'South%20American'}>Southern American</MenuItem>
          <MenuItem value={'South%20East%20Asian'}>South East Asian</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Meal Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={mealType}
          onChange={handleMeal}
          label="Meal Type"
          style={{backgroundColor: 'white', color:"black"}}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
          <MenuItem value={'Lunch'}>Lunch</MenuItem>
          <MenuItem value={'Dinner'}>Dinner</MenuItem>
          <MenuItem value={'Snack'}>Snack</MenuItem>
          <MenuItem value={'Teatime'}>Teatime</MenuItem>
        </Select>
      </FormControl>

      <Button sx={{marginTop: 2}} variant="contained" onClick={()=> (searchterm.length>0 && searchterm!==" ")?fetchData():null}>
          Search
        </Button>
      </Box>
      <div style={{ padding: "30px" }}>
        <Grid container spacing={5}>
          {selection &&
            selection?.hits.map((x, index) => (
              <RecipeReviewCard key={index} dish={x} />
            ))}
        </Grid>
      </div>
    </div>
  );
};
export default Step2a;
