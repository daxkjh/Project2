import React from "react";
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




const SummaryCard =({menuShortlist})=>{
    return (
        <>
        <Card sx={{ width: 240, height: 400 }}>
        <CardMedia
          component="img"
          height="150"
          image={menuShortlist.recipe.image}
          alt={menuShortlist.recipe.label}
        />
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: "h6" }}
          title={menuShortlist.recipe.label}
          subheader={`${menuShortlist.recipe.cuisineType}`.toUpperCase()}
         
        />
        <CardContent>
        
        </CardContent>
        <div style={{position:"absolute", bottom: '0px', right:'0px'}}>
        <CardActions disableSpacing>
          
        </CardActions>
        </div>
        </Card>
        </>
    )
}
export default SummaryCard