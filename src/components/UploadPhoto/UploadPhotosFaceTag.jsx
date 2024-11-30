import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

import CancelIcon from "@mui/icons-material/Cancel";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";

import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { ListItem } from "@mui/material";

const muiAlbumActionButtonProp = {
  size: "small",
  color: "inherit",
  className: "hover:text-red-900 hover:font-semibold",
};
export default function UploadPhotosFaceTag(props) {
  const { onClose, valueprop, open, ...other } = props;
  const [value, setValue] = useState(valueprop);

  const [faceTagNameArr, setFacetagNameArr] = useState(["Facetag Name"]);
  const [newSelectedFace, setNewSelectedFace] = useState("");

  const title = "Photo Facetag";

  useEffect(() => {
    setValue(valueprop);
  }, [valueprop]);

  const handleCancel = () => {
    onClose();
  };

  const handleSaveFTClick = () => {
    onClose(); //Add collected data as argument
  };

  const removeFaceTag = (index) => {
    const newFaceTagNameArray = faceTagNameArr.filter(
      (_, indx) => indx !== index
    );
    setFacetagNameArr(newFaceTagNameArray);
  };

  // Mange new selected face
  const handleCreateNewFaceTag = () => {
    if (newSelectedFace && !faceTagNameArr.includes(createTagInput)) {
      setCreatedTagArray((faceTagNameArr) => [
        ...faceTagNameArr,
        newSelectedFace,
      ]);
    }
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
        <DialogTitle color="#7e0404" sx={{ width: "45%" }}>
          {title}
        </DialogTitle>
        <Button {...muiAlbumActionButtonProp} startIcon={<PhotoFilterIcon />}>
          Scan Faces
        </Button>
        <DialogActions
          sx={{
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Tooltip title="Close Face Tag">
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
        <div className="w-[100%] h-[100%] flex align-middle justify-center">
          <img src={value.imageFileUrl} />
        </div>
      </DialogContent>

      <DialogActions sx={{ display: "flex", flexGrow: 1 }}>
        <Stack
          direction={"row-reverse"}
          spacing={2}
          marginY={2}
          display={"flex"}
          width="100%"
          paddingX={3}
        >
          <Button
            variant="outlined"
            endIcon={<PersonAddAltIcon fontSize="small" />}
            onClick={handleSaveFTClick} //Collect FaceTag Array and pass as Argument
            sx={{
              color: "#cc8400",
              "&:hover": { color: "#ffa500" },
              borderColor: "#cc8400",
            }}
          >
            Save Facetag
          </Button>
          <Box display={"flex"} flexGrow={1} />
          <List dense={false} component="nav">
            {faceTagNameArr.map((val, indx) => (
              <ListItemButton key={`lstIB-${indx}`} sx={{ color: "maroon" }}>
                <ListItemText primary={val} />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeFaceTag(indx)}
                >
                  <DeleteIcon sx={{ color: "maroon" }} />
                </IconButton>
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

UploadPhotosFaceTag.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  valueprop: PropTypes.object.isRequired,
};
