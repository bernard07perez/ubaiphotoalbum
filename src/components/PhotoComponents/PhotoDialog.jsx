import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

import CancelIcon from "@mui/icons-material/Cancel";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SellIcon from "@mui/icons-material/Sell";

import PhotoCarousel from "./PhotoCarousel";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

function PhotoDialog(props, images = null) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const title = "Photo Viewer";

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "60vw",
          minHeight: "500px",
          height: "auto",
          maxWidth: "80vw",
          // maxHeight: "80vh",
        },
      }}
      maxWidth="xs"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <Stack direction={"row"} sx={{ width: "100%", display: "flex" }}>
        <DialogTitle color="#7e0404" sx={{ width: "33%" }}>
          {title}
          <Stack
            direction={"row-reverse"}
            alignitems={"center"}
            sx={{ width: "70%" }}
          ></Stack>
        </DialogTitle>
        <DialogActions
          alignitems="center"
          sx={{ width: "33%", justifyContent: "center" }}
        >
          <Tooltip
            title="Auto Play"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "4px",
            }}
          >
            <IconButton
              aria-label="Auto Play"
              size="small"
              onClick={""}
              sx={{ ":hover": { color: "#7e0404" } }}
            >
              <PlayCircleIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </DialogActions>
        <DialogActions alignitems="center" sx={{ width: "33%" }}>
          <Tooltip
            title="Auto Play"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "4px",
            }}
          >
            <IconButton
              color="warning"
              aria-label="Close"
              size="small"
              onClick={handleCancel}
              sx={{ ":hover": { color: "#7e0404" } }}
            >
              <CancelIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </DialogActions>
      </Stack>

      <DialogContent dividers>
        <div className="w-[100%] h-[100%]">
          <PhotoCarousel />
        </div>
      </DialogContent>
    </Dialog>
  );
}

PhotoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
export default PhotoDialog;
