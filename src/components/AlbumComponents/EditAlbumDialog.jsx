import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useRef, useState } from "react";

const tags = [
  "Science Exploratorium",
  "Artistic Horizons",
  "Step Up for Change",
  "Sportsmania",
  "Code & Conquer",
];

export default function EditAlbumDialog(props) {
  const { onClose, valueprop, open, ...other } = props;

  // const albumInfo = useRef({albumName: valueProp["albumName"], albumDate: valueProp["albumDate"]})
  const [albumNameInput, setAlbumNameInput] = useState("");
  const [albumDateInput, setAlbumDateInput] = useState("");

  const [createdTagArray, setCreatedTagArray] = useState([]);
  const [createTagInput, setCreateTagInput] = useState("");

  useEffect(() => {
    // setValue(valueprop);
    setAlbumNameInput(valueprop.albumName);
    setAlbumDateInput(valueprop.albumDate);
    // const retrieveTagArrValue = valueprop.tagArray.map((val)=>val["kid"]);
    setCreatedTagArray(valueprop.tagArray);
  }, [valueprop]);

  const handleEditAlbumCancel = () => {
    onClose();
  };

  const handleEditAlbumSave = () => {
    // SET the new value of Album Name, Album Date and the new Tag Array as an Object
    // value.current = {...albumInfo,createdTagArray};

    onClose({
      albumName: albumNameInput,
      albumDate: albumDateInput,
      albumTagArray: createdTagArray,
    });
  };

  const handleAlbumNameChange = (albumNameArg) => {
    setAlbumNameInput(albumNameArg);
  };

  const handleAlbumDateChange = (albumDateArg) => {
    setAlbumDateInput(albumDateArg);
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
      sx={{ "& .MuiDialog-paper": { width: "80%", minHeight: "80%" } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle color="maroon">Edit Album</DialogTitle>
      <DialogContent
        dividers
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Grid2
          container
          spacing={2}
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column", // Stacks items vertically
            height: "100%", // Matches the DialogContent height
          }}
        >
          <Grid2
            item="true"
            sx={{
              flexShrink: 0, // Prevent shrinking
              height: "120px", // Fixed or minimum height
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
                Album Name
              </InputLabel>
              <OutlinedInput
                id="album-name-label"
                type="text"
                value={albumNameInput}
                size="medium"
                label="Album Name"
                onChange={(e) => handleAlbumNameChange(e.target.value)}
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
            <FormControl fullWidth sx={{ marginY: 1 }} variant="outlined">
              <InputLabel
                htmlFor="album-date-label"
                // color="none"
                size="small"
                sx={{ color: "maroon", "&.Mui-focused": { color: "maroon" } }}
              >
                Album Year
              </InputLabel>
              <OutlinedInput
                id="album-date-label"
                type="text"
                value={albumDateInput}
                size="medium"
                label="Album Year"
                onChange={(e) => handleAlbumDateChange(e.target.value)}
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
            item="true"
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
      </DialogContent>
      <DialogActions sx={{ paddingX: 4 }}>
        <Button
          autoFocus
          size="small"
          color="inherit"
          sx={{ "&:hover": { color: "maroon", backgroundColor: "#ffa500" } }}
          onClick={handleEditAlbumCancel}
        >
          Cancel
        </Button>
        <Button
          size="small"
          color="inherit"
          sx={{ "&:hover": { color: "maroon", backgroundColor: "#ffa500" } }}
          onClick={handleEditAlbumSave}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EditAlbumDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // value: PropTypes.string.isRequired,
};
