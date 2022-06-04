import React from "react";
import "../App.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from '@mui/icons-material/Delete';
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




const SummaryCard =({favItem, setMenuShortlist, menuShortlist})=>{
    return (
        <div style={{display:"inline-block"}}>
        <Card sx={{ width: 400, height: 300 }}>
        <CardMedia
          component="img"
          height="150"
          image={favItem.recipe.image}
          alt={favItem.recipe.label}
        />
        <CardHeader
          action={
            <IconButton onClick={handleDelete} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: "h6" }}
          title={favItem.recipe.label}
          subheader={`${favItem.recipe.cuisineType}`.toUpperCase()}
        />
        {/* <CardContent>
        
        </CardContent> */}
        {/* <div style={{position:"absolute", bottom: '0px', right:'0px'}}>
        <CardActions disableSpacing>
          
        </CardActions>
        </div> */}
        </Card>
        </div>
    )
}
export default SummaryCard