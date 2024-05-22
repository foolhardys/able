import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MediaCard from "../components/Card";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

export default function BasicModal({ internship }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <button onClick={handleOpen}>Details</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MediaCard internship={internship} />
        </Box>
      </Modal>
    </div>
  );
}
