import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CardModal({ dish }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <Button sx={{position:"relative", float:"none"}} onClick={handleOpen}>More Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // style={{ overflow: "scroll" }}
      >
        <Box sx={style}>
        <IconButton aria-label="settings" onClick={handleClose} sx={{position: 'absolute', right: '0', top: '0'}}>
        <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h5" component="h2">
            {dish?.recipe?.label}
          </Typography>
          <CardMedia
            component="img"
            height="250"
            image={dish?.recipe?.image}
            alt={dish?.recipe?.label}
          />
          
          <Box component='div' sx={{height: "250px", overflow: "scroll",
        overscrollBehavior: "contain"}}>
          <Typography variant="subtitle1">Ingredients</Typography>
          <Box component="ol">
            {(dish?.recipe?.ingredients).map((x, index) => (
              <Typography
                key={index}
                id="modal-modal-description"
                variant="body"
                component="li"
                sx={{ mt: 1, fontSize: "small" }}
              >
                {x.text}
              </Typography>
            ))}
          </Box>
          </Box>
          {/* <a href={`${dish?.recipe?.url}`} target="_blank" style={{color:'black'}}>See Cooking Instructions</a> */}
          <Button target="_blank" href={`${dish?.recipe?.url}`}>See Cooking Instructions</Button>
        </Box>
      </Modal>
    </div>
  );
}

// 
