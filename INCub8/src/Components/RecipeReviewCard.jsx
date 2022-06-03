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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ dish }) {
  const [expanded, setExpanded] = React.useState(false);
  const [tagline, setTagline] = useState();
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const tag = dish?.recipe?.healthLabels;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          {/* <Typography variant="subtitle1">
            {`${dish?.recipe?.dishType}`.toUpperCase()}
          </Typography> */}
        </CardContent>
        <div style={{position:"absolute", bottom: '0px', right:'0px'}}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
