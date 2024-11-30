import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useState, useRef } from "react";

import AlbumEmptyCover from "../../assets/img/react.svg";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import { orange } from "@mui/material/colors";
import ImageWithFallback from "../utils/ImageWithFallback";

// const label = { inputProps: { "aria-label": "Album Checkbox" } };
const muiAlbumActionButtonProp = {
  size: "small",
  color: "inherit",
  className: "hover:text-red-900 hover:font-semibold",
};

export default function AlbumGridViewer({
  isAlbumClick,
  isEditAlbumClick,
  isDeleteAlbumClick,
  retrieveData,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const albumEditInfo = useRef({
    albumName: "",
    albumDate: "",
    albumTagArr: [],
  });

  const open = Boolean(anchorEl);

  const handleClick = (e, albumInfo) => {
    //albumInfo will be use for Edit Album Modal (Album Name, Album Date, Albm Tags)
    albumEditInfo.current.albumName = albumInfo.albumName;
    albumEditInfo.current.albumDate = albumInfo.albumDate;
    albumEditInfo.current.albumTagArr = albumInfo.albumTagArr;

    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    isEditAlbumClick(albumEditInfo.current); //Call and Pass the Album Information to Edit Modal
  };
  const handleDelete = () => {
    setAnchorEl(null);
    isDeleteAlbumClick();
  };

  return (
    <>
      <Box sx={{ minHeight: "300px", position: "relative" }}>
        <Stack
          direction={"row"}
          spacing={2}
          marginLeft={4}
          alignItems={"center"}
          color={"#991b1b"}
        >
          <FolderOpenIcon size="large" />
          <Typography variant="h6">Folders</Typography>
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap", justifyContent: "left" }}
        >
          {retrieveData.map((albums, indx) => {
            const recordContent = albums?.contents.filter(
              (record) => record.type === "image"
            );
            let albumCoverbBasePath = "/img/";
            let albumCoverImage = "";

            if (recordContent[0]) {
              albumCoverbBasePath += recordContent[0]?.ancestor
                .map((item) => item + "/")
                .join("");
              albumCoverImage = albumCoverbBasePath + recordContent[0]?.Name;
            } else {
              albumCoverImage = AlbumEmptyCover;
            }

            return (
              // border-solid border-2 border-gray-300
              <div
                key={indx}
                className="w-[85%] sm:w-[80%] md:w-[46%] lg:w-[30%] xl:w-[23%] 2xl:w-[18%] min-w-[218.5px] h-auto min-h-[250px] sm:min-h-[250px] lg:min-h-[200px] 2xl:min-h-[250px] px-4 pt-4 m-2 rounded-3xl text-center relative group"
              >
                <div className="absolute w-[88%] h-[80%] max-w-[88%] max-h-[85%] rotate-6 rounded-xl  shadow-md shadow-gray-700 bg-red-900"></div>
                <div className="absolute w-[88%] h-[80%] max-w-[88%] max-h-[85%] rotate-2 rounded-xl  shadow-md shadow-gray-700 bg-yellow-600"></div>
                <div className="absolute w-[88%] h-auto  max-w-[88%] max-h-[85%] -rotate-3 rounded-xl contain-content justify-center shadow-md shadow-gray-700 bg-white">
                  {/* <ImageWithFallback
                    src={albumCoverImage}
                    alt={albums.Name + " Cover Photo"}
                    isImageClick={() =>
                      isAlbumClick(albums.Name, albums.contents)
                    }
                    classArg="w-[100%] h-1/6 absolute rounded-md z-10 left-0 bottom-4 text-left bg-opacity-80  bg-red-900 text-gray-200 px-5 flex items-center group-hover:-translate-y-1 hover:scale-105 duration-150"
                  /> */}
                  <img
                    onClick={() => isAlbumClick(albums.Name, albums.contents)}
                    src={albumCoverImage}
                    // src={`/img/${basepath}/${albums.Photos[0].filename}`}
                    className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out  group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-transparent"
                  />
                </div>
                {/* <div className="absolute bg-gray-900 w-[100%] h-[100%] top-0 left-0 bg-opacity-30 rounded-3xl hover:-translate-y-1 hover:scale-105 hover:bg-transparent duration-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"> */}

                <label className="w-[100%] h-1/6 absolute rounded-md z-10 left-0 bottom-4 text-left bg-opacity-80  bg-red-900 text-gray-200 px-5 flex items-center group-hover:-translate-y-1 hover:scale-105 duration-150">
                  <Checkbox
                    className="h-4 w-4"
                    sx={{
                      color: orange[800],
                      "&.Mui-checked": {
                        color: orange[300],
                      },
                    }}
                  ></Checkbox>
                  <span className="align-middle text-xl ms-2">
                    {albums.Name}
                  </span>
                  <Tooltip title="Album Option">
                    <IconButton
                      onClick={(e) =>
                        handleClick(e, {
                          albumName: albums.Name,
                          albumDate: albums.DateCreated,
                          albumTagArr: albums.tags[0].keywordtag,
                        })
                      }
                      size="medium"
                      sx={{
                        marginLeft: "auto",
                        color: "white",
                        fontWeight: "bold",
                        padding: 0,
                      }}
                    >
                      <MoreVertSharpIcon />
                    </IconButton>
                  </Tooltip>
                </label>
              </div>
            );
          })}
        </Stack>
      </Box>
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
        <MenuItem onClick={handleEdit}>
          <DriveFileRenameOutlineIcon /> Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteForeverIcon /> Delete
        </MenuItem>
      </Menu>
    </>
  );
}
