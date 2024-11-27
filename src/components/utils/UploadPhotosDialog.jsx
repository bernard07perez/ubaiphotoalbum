import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import CheckBox from "@mui/material/Checkbox";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Grid2 from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import { ListItemButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import PropTypes, { string } from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadIcon from "@mui/icons-material/Upload";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

import { ALBUM_RECORDS } from "../../context/Album_Records";
import WarningMessage from "./WarningMessage";
import ProgressBarLinear from "./ProgressBarLinear";

const mainButtonStyle = {
  backgroundColor: "#852221",
  "&:hover": {
    backgroundColor: "#ffa500",
  },
  color: "#fff",
};

export default function UploadPhotosDialog({
  uploadType = "Photo",
  openImageDialog,
  onImageDialogClose,
  onImageUploadRequest,
  uploadContainer,
  // InjectedInfoLabel,
  // InjectedInfoInput,
}) {
  const matchesSm = useMediaQuery("(max-width:600px)");
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesLg = useMediaQuery("(max-width:1280px)");
  const matchesXl = useMediaQuery("(max-width:1920px)");

  const getCols = () => {
    if (matchesSm) return 2;
    if (matchesMd) return 3;
    if (matchesLg) return 4;
    if (matchesXl) return 6;
    return 10; // Default value for xl and larger screens
  };

  const getRows = () => {
    if (matchesSm) return 150;
    if (matchesMd) return 120;
    if (matchesLg) return 110;
    if (matchesXl) return 105;
    return 100; // Default value for xl and larger screens
  };

  const [imageFiles, setImageFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [createTagInput, setCreateTagInput] = useState("");
  const [createdTagArray, setCreatedTagArray] = useState([]);
  const uploadContainerReceived = uploadContainer;
  const hint = useRef("");
  const [inputValue, setInputValue] = useState("");
  const [warningModal, setWarningModal] = useState(false);
  const warningBody = useRef("");

  const optionAlbumList = Array.from(ALBUM_RECORDS).map((val) => ({
    label: val.Name,
    year: val["Year Created"],
  }));

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImageFiles((prevImages) => prevImages.concat(fileArray));
  };

  const changeUploadType =
    uploadType === "Photo"
      ? { accept: "image/*" }
      : {
          webkitdirectory: "true",
          directory: "true", // Enable directory selection ="true"
        };

  const selectedImageChange = (index) => {
    setSelectedImages((prevSelectedItems) =>
      prevSelectedItems.includes(index)
        ? prevSelectedItems.filter((item) => item !== index)
        : [...prevSelectedItems, index]
    );
  };

  const handleRemoveSelected = () => {
    const remainingImages = imageFiles.filter(
      (_, index) => !selectedImages.includes(index)
    );
    setSelectedImages([]);
    setImageFiles(remainingImages);
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
  const handleWarningModalClose = () => {
    setWarningModal(false);
  };
  // const {
  //   windowDialogLabel: dialogLabel,
  //   open: openImageDialog,
  //   onClose: onImageDialogClose,
  //   onUpload: onImageUploadRequest,
  //   ...other
  // } = props;

  return (
    <>
      <Dialog
        key={"dlky"}
        id={"dlid"}
        sx={{
          "& .MuiDialog-paper": {
            width: "80vw",
            height: "auto",
            maxWidth: "90vw",
          },
        }}
        maxWidth="xs"
        open={openImageDialog}
        keepMounted
      >
        <DialogTitle
          key={"dtky"}
          id={"dtid"}
          color="#7e0404"
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <AddAPhotoIcon /> {`Upload ${uploadType}`}
        </DialogTitle>

        <DialogContent
          key={"dcky"}
          id={"dcid"}
          dividers
          sx={{ overflow: "hidden" }}
        >
          {/* <div key={"dv1ky"} id={"dv1id"} className="w-[100%] h-[100%] min-h-96"> */}
          {/* <Stack direction={"row"} alignitems={"center"} spacing={2}> */}
          <Grid2 container spacing={2}>
            <Grid2
              item
              width={"23%"}
              sx={{
                borderRight: "1px solid lightgray",
                paddingX: ".5rem",
                backgroundColor: "#852221",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
                variant="subtitle1"
                component="div"
                color="#ffa500"
              >
                Create Tag:
              </Typography>
              <Stack direction={"row"}>
                <FormControl
                  sx={{ m: 1, width: "45ch", margin: "0" }}
                  variant="outlined"
                >
                  <InputLabel
                    htmlFor="createTag-adornment-label"
                    // color="none"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    Tag
                  </InputLabel>
                  <OutlinedInput
                    id="createTag-adornment-label"
                    type="text"
                    // color="none"
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
            <Grid2 item width={"75%"}>
              <Stack
                key={"st1ky"}
                id={"st1id"}
                direction={"row"}
                alignitems={"center"}
                spacing={4}
                paddingBottom={2}
              >
                {/* Depends on the sender components */}
                {/* {InjectedInfoLabel}
              {InjectedInfoInput} */}
                {/*Depends on the sender components */}
              </Stack>
              <Stack
                key={"st2ky"}
                id={"st2id"}
                direction={"row"}
                alignitems={"center"}
                width={"100%"}
                spacing={2}
                padding={0}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box sx={{ flexGrow: 1 }} />
                <Typography
                  key={"tp1ky"}
                  id={"tp1id"}
                  noWrap
                  sx={{ width: "8rem", fontSize: "1.1rem" }}
                  variant="subtitle1"
                >
                  Selected Album:
                </Typography>
                <Autocomplete
                  size="small"
                  onKeyDown={(event) => {
                    if (event.key === "Tab") {
                      if (hint.current) {
                        setInputValue(hint.current);
                        event.preventDefault();
                      }
                    }
                  }}
                  onClose={() => {
                    hint.current = "";
                  }}
                  onChange={(event, newValue) => {
                    setInputValue(
                      newValue && newValue.label ? newValue.label : ""
                    );
                  }}
                  disablePortal
                  inputValue={inputValue}
                  id="combo-box-hint-demo"
                  options={optionAlbumList}
                  sx={{ width: 350 }}
                  renderInput={(params) => {
                    return (
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          sx={{
                            position: "absolute",
                            opacity: 0.5,
                            left: 14,
                            top: 16,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            width: "calc(100% - 75px)", // Adjust based on padding of TextField
                          }}
                        >
                          {hint.current}
                        </Typography>
                        <TextField
                          {...params}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setInputValue(newValue);
                            const matchingOption = optionAlbumList.find(
                              (option) => option.label.startsWith(newValue)
                            );

                            if (newValue && matchingOption) {
                              hint.current = matchingOption.label;
                            } else {
                              hint.current = "";
                            }
                          }}
                          label="Album"
                        />
                      </Box>
                    );
                  }}
                />

                <input
                  id={"raised-button-file-" + { uploadType }}
                  key={"in1ky"}
                  type="file"
                  multiple={true}
                  {...changeUploadType}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label
                  key={uploadType + "lb1ky"}
                  id={uploadType + "lb1id"}
                  htmlFor={"raised-button-file-" + { uploadType }}
                >
                  <Button
                    key={"btn1ky"}
                    id={"btn1id"}
                    variant="outlined"
                    component="span"
                    startIcon={<AddAPhotoIcon key={"ico0ky"} id={"ico0id"} />}
                    size="medium"
                    sx={{ ...mainButtonStyle, width: "160px" }}
                  >
                    {`Add ${uploadType}`}
                  </Button>
                </label>
              </Stack>
              <Divider sx={{ marginY: 2 }} />
              <Box
                sx={{
                  // border: "1px solid",
                  // borderRadius: "5px",
                  minHeight: "430px",
                  maxHeight: "430px",
                  marginTop: "20px",
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflowY: "auto",
                }}
              >
                <ImageList
                  key={"imglstky"}
                  id={"imglstid"}
                  gap={6}
                  cols={getCols()}
                  rowHeight={getRows()}
                  overflow="scroll"
                  sx={{ position: "absolute", top: 0, margin: 1 }}
                  // sx={{
                  //   border: "1px solid",
                  //   minHeight: "430px",
                  //   maxHeight: "430px",
                  //   marginTop: "20px",
                  // }}
                >
                  {imageFiles.map((img, index) => (
                    <ImageListItem
                      key={index + "imglstIky"}
                      id={index + "imglstIid"}
                      sx={{
                        contain: "content",
                        position: "relative",
                      }}
                    >
                      <img
                        key={index + "imglstIky"}
                        id={index + "imglstIid"}
                        src={img}
                        alt={`Image ${index}`}
                        loading="lazy"
                      />
                      <CheckBox
                        icon={
                          <CheckBoxOutlineBlankIcon
                            sx={{ bgcolor: "white", borderRadius: "3px" }}
                          />
                        }
                        sx={{
                          position: "absolute",
                          top: 1,
                          right: 1,
                          padding: 0,
                          zIndex: 1,
                          color: "maroon",

                          "&.Mui-checked": {
                            bgcolor: "white",
                            color: "maroon",
                          },
                        }}
                        checked={selectedImages.includes(index)} // Controlled by state
                        onChange={() => selectedImageChange(index)} // Update state on toggle
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
              {/* </div> */}
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions
          key={"dla1ky"}
          id={"dla1id"}
          sx={{ alignitems: "center", justifyContent: "space-between" }}
        >
          <Stack
            key={"st3ky"}
            id={"st3id"}
            direction={"row"}
            spacing={2}
            marginY={2}
            display={"flex"}
            width="100%"
            paddingX={3}
          >
            <Box sx={{ flexGrow: 1 }}>
              <span>
                Upload progress:{" "}
                <i className="text-red-800"> Detecting face region in photo</i>
              </span>
              <ProgressBarLinear />
            </Box>
            {selectedImages.length > 0 && (
              <Button
                key={"btn2ky"}
                id={"btn2id"}
                variant="outlined"
                onClick={handleRemoveSelected}
                endIcon={
                  <DeleteOutlineIcon
                    key={"ico2ky"}
                    id={"ico2id"}
                    fontSize="small"
                  />
                }
                sx={{
                  color: "#852221",
                  "&:hover": { color: "#d41717" },
                  borderColor: "#852221",
                }}
              >
                Remove Selected
              </Button>
            )}

            <Button
              key={"btn3ky"}
              id={"btn3id"}
              variant="outlined"
              onClick={() => onImageUploadRequest(imageFiles)}
              endIcon={
                <UploadIcon key={"ico1ky"} id={"ico1id"} fontSize="small" />
              }
              sx={{
                color: "#cc8400",
                "&:hover": { color: "#ffa500" },
                borderColor: "#cc8400",
              }}
            >
              Upload
            </Button>

            <Button
              key={"btn4ky"}
              id={"btn4id"}
              variant="outlined"
              onClick={onImageDialogClose}
              endIcon={
                <CancelIcon key={"ico2ky"} id={"ico2id"} fontSize="small" />
              }
              sx={{
                color: "#852221",
                "&:hover": { color: "#d41717" },
                borderColor: "#852221",
              }}
            >
              Close
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
      <WarningMessage
        open={warningModal}
        onClose={handleWarningModalClose}
        title="Upload photo"
        warnBody={<>{warningBody.current}</>}
      />
    </>
  );
}

// UploadImageDialog.propTypes = {
//   windowDialogLabel: PropTypes.string.isRequired,
//   open: PropTypes.bool.isRequired,
//   onclose: PropTypes.func.isRequired,
//   onUpload: PropTypes.func.isRequired,
// };
