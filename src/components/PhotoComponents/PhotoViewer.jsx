import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import UploadImageDialog from "../utils/UploadPhotosDialog.jsx";
import PhotoDialog from "./PhotoDialog.jsx";
import PersonIcon from "@mui/icons-material/Person";
import AlbumEmptyCover from "../../assets/img/react.svg";
// import UploadPhotos from "./UploadPhotos.jsx";

import { useState } from "react";
import { orange } from "@mui/material/colors";

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const muiAlbumActionButtonProp = {
  size: "small",
  color: "inherit",
  className: "hover:text-red-900 hover:font-semibold",
};

export default function PhotoViewer({ retrieveData, isUploadPhotoClick }) {
  // const [openUploadPhotosDialog, setOpenUploadPhotosDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpen] = useState(false);

  const open = Boolean(anchorEl);

  // const handleImageUploadRequest = (uploadedImageArr) => {
  //   setOpenUploadPhotosDialog(false);

  //   if (uploadedImageArr) {
  //     setValue(uploadedImageArr); //change the "setValue" for Image processing/manipulation pupose
  //   }
  // };
  // const handleImageDailogClose = () => {
  //   setOpenUploadPhotosDialog(false);
  // };

  // function handelUploadPhotoDailogClick() {
  //   setOpenUploadPhotosDialog(true);
  // }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePhotoViewerDialogOpen = () => {
    setOpen(true);
  };

  const handlePhotoViewerDialogClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        marginLeft={4}
        alignItems={"center"}
        color={"#991b1b"}
      >
        <FolderOpenIcon size="large" />
        <Typography variant="h6">Photos</Typography>
        <Stack direction={"row-reverse"} sx={{ width: "85%" }}>
          <Button
            // onClick={handelUploadPhotoDailogClick}
            onClick={() => isUploadPhotoClick("Photo")}
            {...muiAlbumActionButtonProp}
            startIcon={<AddAPhotoIcon />}
          >
            Add Photos
          </Button>
        </Stack>
      </Stack>
      <ImageList
        sx={{
          width: "100%",
          mb: 4,
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))!important",
          transform: "translateZ(0)",
          borderRadius: "15px",
          border: "0 Solid",
        }}
        gap={12}
      >
        {retrieveData.map((photo, indx) => {
          let imageBasePath = "/img/";
          let imageView = "";

          if (photo) {
            imageBasePath += photo.ancestor.map((item) => item + "/").join("");
            imageView = imageBasePath + photo.Name;
          } else {
            imageView = imageEmptyCover;
          }
          return (
            <>
              <ImageListItem
                key={`imglist-${indx}${imageBasePath}`}
                className="group"
              >
                <img
                  key={`imgview-${imageBasePath}`}
                  {...srcset(imageView, 120)} //******TO CONTINUE WORKING******/
                  alt={photo.DateCreated}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                  className=""
                  onClick={handlePhotoViewerDialogOpen}
                  //"opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  className="bg-opacity-10 group-hover:bg-[rgba(0,0,0,.5)] "
                  title={
                    <Typography
                      variant="body2"
                      display={"block"}
                      textAlign={"center"}
                    >
                      {photo.Name}
                    </Typography>
                  }
                  position="top"
                  actionIcon={
                    <Stack direction={"row"}>
                      <Tooltip
                        title="Uploader"
                        sx={{
                          position: "absolute",
                          bottom: "0",
                          left: "4px",
                        }}
                      >
                        <Avatar src="/img/u1.jpg" />
                      </Tooltip>
                      <Tooltip title="Photo Option">
                        <IconButton
                          onClick={handleClick}
                          size="medium"
                          sx={{
                            position: "absolute",
                            bottom: "4px",
                            right: "4px",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <MoreVertSharpIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  }
                  actionPosition="left"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  // className="opacity-40 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  title={
                    <Stack
                      direction={"row"}
                      sx={{
                        display: "block",
                        textAlign: "right",
                      }}
                    >
                      <label>
                        <span className="me-4">{photo.UploadDate}</span>
                        <Checkbox
                          className="h-4 w-4"
                          sx={{
                            color: orange[800],
                            "&.Mui-checked": {
                              color: orange[300],
                            },
                          }}
                        ></Checkbox>
                      </label>
                    </Stack>
                  }
                  position="bottom"
                  actionIcon={<></>}
                  actionPosition="left"
                />
              </ImageListItem>
            </>
          );
        })}
      </ImageList>
      <Menu
        anchorEl={anchorEl}
        id="photo-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handlePhotoViewerDialogOpen}>
          <DriveFileRenameOutlineIcon /> Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteForeverIcon /> Delete
        </MenuItem>
      </Menu>
      <PhotoDialog
        id="photo-viewer-grid"
        key="photo-viewer-grid"
        keepMounted
        open={openDialog}
        onClose={handlePhotoViewerDialogClose}
        value={""}
      />
      {/* <UploadPhotos
        id="upload-photos"
        keepMounted
        open={openUploadPhotosDialog}
        onClose={handleImageDailogClose}
        value={""}
      /> */}
      {/* <UploadImageDialog
        key={`upidpv-${uuidv4}`}
        dialogLabel="Upload a photo"
        openImageDialog={openUploadPhotosDialog}
        onImageDialogClose={handleImageDailogClose}
        onImageUploadRequest={handleImageUploadRequest}
      /> */}
    </>
  );
}
