import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0 solid",
  borderRadius: "10px",
  boxShadow: 24,
  py: 4,
  px: 2,
};

function WarningMessage(props) {
  const {
    open,
    onClose,
    title = "Warning Message",
    warnBody,
    ...other
  } = props;

  return (
    <Modal open={open} keepMounteded>
      <Box sx={style}>
        <Typography variant="h6" color="#991b1b">
          {title}
        </Typography>
        <Divider sx={{ marginY: "1rem" }} />
        <Typography
          variant="body1"
          sx={{ textIndent: "2rem", textAlign: "justify" }}
        >
          {warnBody}
        </Typography>
        <Divider sx={{ marginY: "1rem" }} />
        <Stack direction={"row-reverse"}>
          <Button onClick={onClose} color="error">
            Ok
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

WarningMessage.prototype = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  warnBody: PropTypes.element.isRequired,
};

export default WarningMessage;
