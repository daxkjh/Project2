import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";

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

export default function CardModal({dish}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia
        component="img"
        height="250"
        image={dish?.recipe?.image}
        alt={dish?.recipe?.label}
      />
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {dish?.recipe?.label}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          </Typography>
          {(dish?.recipe?.ingredients).map((x,index)=> <Typography key={index} id="modal-modal-description" variant="body" component="li" sx={{ mt: 1, fontSize: 'small' }}>{x.text}</Typography>)}
        </Box>
      </Modal>
    </div>
  );
}
