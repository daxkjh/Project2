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

  const tag = dish?.recipe?.healthLabels;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ padding: "5px" }}>
      <Card sx={{ width: 240, height: 450 }}>
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
          subheader={dish?.recipe?.cuisineType}
        />
        <CardContent>
          <Typography variant="subtitle1">
            {`${dish?.recipe?.dishType}`.toUpperCase()}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <CardModal dish={dish} />

          {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
          {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {tag.map((x, index) => (
          <Chip key={index} label={x} margin={1}/>
        ))}
          <Typography paragraph><strong>Ingredients:</strong></Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse> */}
      </Card>
    </div>
  );
}
