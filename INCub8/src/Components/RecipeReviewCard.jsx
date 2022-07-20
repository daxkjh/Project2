import * as React from "react";
import "../App.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Modal,
  Box,
  Card,
  Chip,
  Stack,
  Typography,
  Collapse,
  Avatar,
  IconButton,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
} from "@mui/material";
import CardModal from "./CardModal";


export default function RecipeReviewCard({ dish, menuShortlist, setMenuShortlist }) {
  const [listCheck, setListCheck] = useState()
  
 const listChecker = menuShortlist.some(element => element.recipe.image === dish.recipe.image)
 
  const handleIconClick=()=>{
    if( (menuShortlist.some(element => element.recipe.label === dish.recipe.label ) === false )){
    setMenuShortlist(
      [...menuShortlist,dish]
    )}

    console.log(dish?.recipe?.image)
    console.log("listchecker",listChecker)
    console.log("menushortlist",menuShortlist)
  }
  console.log(menuShortlist)
  let x = menuShortlist.some(element => element.recipe.label === dish.recipe.label)
  console.log(x)

  return (
    <div style={{ position:"relative", padding: "5px" }}>
      <Card sx={{ width: 240, height: 400 }}>
        <CardMedia
          component="img"
          height="150"
          image={dish?.recipe?.image}
          alt={dish?.recipe?.label}
        />
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: "h6" }}
          title={dish?.recipe?.label}
          subheader={`${dish?.recipe?.cuisineType}`.toUpperCase()}
         
        />
        <CardContent>
        
        </CardContent>
        <div style={{position:"absolute", bottom: '0px', right:'0px'}}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleIconClick}>
            {(menuShortlist.some(element => element.recipe.label === dish.recipe.label)) ? <FavoriteIcon style={{ color: 'red' }}/> : <FavoriteIcon onClick={handleIconClick}/>}
          </IconButton>
        </CardActions>
        </div>
        <div style={{position:"absolute", left: '25%', bottom:"5px"}}>
        <CardModal dish={dish}/>
        </div>
      </Card>
    </div>
  );
}
