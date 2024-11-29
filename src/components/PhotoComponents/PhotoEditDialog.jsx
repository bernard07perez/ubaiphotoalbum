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
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import CancelIcon from "@mui/icons-material/Cancel";
import SellIcon from "@mui/icons-material/Sell";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

export default function PhotoEditDialog(props) {
  const { onClose, valueprop, open, ...other } = props;
  const [value, setValue] = useState(valueprop);

  //     valueprop = {
  //     indx: 0,
  //     fileName: "",
  //     fileUrl: "",
  //     keywordTag: [],
  //     faceTag: {},
  //   };

  const [fileName, setFileName] = useState("");

  const [faceTagNameArr, setFacetagNameArr] = useState([{}]);
  const [newSelectedFace, setNewSelectedFace] = useState("");

  const [createdTagArray, setCreatedTagArray] = useState([]);
  const [createTagInput, setCreateTagInput] = useState({});

  const title = "Edit Photo Tags";

  useEffect(() => {
    setFileName(valueprop.fileName);
    setCreatedTagArray(valueprop.keywordTag);
    setFacetagNameArr(valueprop.faceTag);
    setValue((prevValueProp) => (prevValueProp = valueprop));

    console.log("entering in photoEdit dialog");
    console.log(valueprop);
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

  const handleCreateNewTag = () => {
    if (createTagInput && !createdTagArray.includes(createTagInput)) {
      setCreatedTagArray((prevCreateTagArr) => [
        ...prevCreateTagArr,
        createTagInput,
      ]);
    } else {
      warningBody.current =
        "The Tag you're trying to save is either empty or already exist! Please enter a new Tag again!";
      setWarningModal(true);
    }
  };

  const removeCreatedTag = (index) => {
    const newCreatedTagArray = createdTagArray.filter(
      (_, indx) => indx !== index
    );
    setCreatedTagArray(newCreatedTagArray);
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
        </DialogTitle>

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

      <DialogContent dividers sx={{ display: "flex", alignItems: "center" }}>
        <Grid2
          container
          spacing={2}
          sx={{
            minWidth: 200,
            maxWidth: 250,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column", // Stacks items vertically
            height: "100%", // Matches the DialogContent height
          }}
        >
          <Grid2
            item
            sx={{
              flexShrink: 0, // Prevent shrinking
              height: "60px", // Fixed or minimum height
            }}
          >
            <FormControl fullWidth sx={{ margin: 0 }} variant="outlined">
              <InputLabel
                htmlFor="album-name-label"
                // color="none"
                size="small"
                sx={{
                  color: "maroon",
                  "&.Mui-focused": { color: "maroon" },
                }}
              >
                Photo Filename
              </InputLabel>
              <OutlinedInput
                id="album-name-label"
                type="text"
                value={fileName}
                size="medium"
                label="Photo Filename"
                onChange={(e) => setCreateTagInput(e.target.value)}
                sx={{
                  color: "maroon",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "maroon",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "maroon",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "maroon",
                  },
                }}
              />
            </FormControl>
          </Grid2>
          <Grid2
            item
            sx={{
              flexGrow: 4,
              borderRight: "1px solid lightgray",
              paddingX: ".5rem",
              backgroundColor: "#852221",
              borderRadius: "10px",
              minHeight: "360px",
              padding: 2,
            }}
          >
            <Typography
              sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
              variant="subtitle1"
              component="div"
              color="#ffa500"
            >
              Tags:
            </Typography>
            <Stack direction={"row"}>
              <FormControl
                fullWidth
                sx={{ display: "flex", flexGrow: 1, margin: 0 }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="createTag-adornment-label"
                  size="small"
                  sx={{ color: "white" }}
                >
                  Tag
                </InputLabel>
                <OutlinedInput
                  id="createTag-adornment-label"
                  type="text"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={"Create Tag"}
                        edge="end"
                        onClick={handleCreateNewTag}
                        sx={{ color: "white" }}
                      >
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Create Tag"
                  onChange={(e) => setCreateTagInput(e.target.value)}
                  sx={{
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                  }}
                />
              </FormControl>
            </Stack>

            <List dense={false} component="nav">
              {createdTagArray.map((val, indx) => (
                <ListItemButton key={`lstIB-${indx}`} sx={{ color: "white" }}>
                  <ListItemText primary={val} />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeCreatedTag(indx)}
                  >
                    <DeleteIcon sx={{ color: "white" }} />
                  </IconButton>
                </ListItemButton>
              ))}
            </List>
          </Grid2>
        </Grid2>

        <div className="!w-[60%] h-[auto] flex align-middle justify-center mx-5">
          <img src={value.fileUrl} />
        </div>
      </DialogContent>

      <DialogActions
        sx={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row-reverse"}
          spacing={2}
          marginY={2}
          display={"flex"}
          width="100%"
          paddingX={3}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            endIcon={<SellIcon fontSize="small" />}
            onClick={handleSaveFTClick} //Collect FaceTag Array and pass as Argument
            sx={{
              height: 40,
              color: "#cc8400",
              "&:hover": { color: "#ffa500" },
              borderColor: "#cc8400",
            }}
          >
            Save Tag
          </Button>
          <Box display={"flex"} flexGrow={1} />
          <List dense={false} component="nav" sx={{ display: "flex" }}>
            {faceTagNameArr.map((val, indx) => (
              <ListItemButton key={`lstIB-${indx}`} sx={{ color: "maroon" }}>
                <ListItemText primary={val.uid} />
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

PhotoEditDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  valueprop: PropTypes.object.isRequired,
};
