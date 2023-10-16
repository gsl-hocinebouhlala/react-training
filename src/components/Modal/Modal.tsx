import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { ModalType } from "../../types/types";

const BasicModal = ({ isModalOpen, handleClose, children }: ModalType) => (
  <div>
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          bgcolor: "white",
          boxShadow: 10,
          borderRadius: "4px",
          p: 2,
        }}
      >
        {children}
      </Box>
    </Modal>
  </div>
);

export default BasicModal;
