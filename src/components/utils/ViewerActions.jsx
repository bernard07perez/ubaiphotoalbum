import React, { useState } from "react";
import {
  VscListUnordered,
  VscFolderOpened,
  VscTrash,
  VscEdit,
  VscSearch,
  VscArrowLeft,
} from "react-icons/vsc";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import GridViewIcon from "@mui/icons-material/GridView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SelectAllSharpIcon from "@mui/icons-material/SelectAllSharp";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchFilterDialog from "./SearchFilterDialog";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const muiAlbumActionButtonProp = {
  size: "small",
  color: "inherit",
  className: "hover:text-red-900 hover:font-semibold",
};

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffa500",
          color: "#852221",
          borderRadius: "20px",
          padding: "5px 10px",
          height: "40px",
          "&:hover": { backgroundColor: "#852221", color: "white" },
        },
      },
    },
  },
});

const menuitemicon = { color: "#852221", margin: "10px" };

export default function ViewerActions({
  viewModeType = "grid",
  albumLabel = "Albums",
  previousRecord = [],
  isPreviousRecordClicked,
  isCreateAlbumClicked,
  isAlbumViewModeClicked,
  isUploadPhotoClicked,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);

  //Key Value Pair for this is {filterAttribute: ""}, {filterValue: ""}, {filterOperand: "and || or"}
  const [filterValue, setFilterValue] = useState([]);

  const handleFilterDialogClose = (filterValueArgs) => {
    setFilterValue((prevfilterValue) => (prevfilterValue = filterValueArgs));
    setOpenFilterDialog(false);
  };
  const handleFilterDialogSave = (filterValueArgs) => {
    setFilterValue((prevfilterValue) => (prevfilterValue = filterValueArgs));
    setOpenFilterDialog(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseDownSearch = (event) => {
    event.preventDefault();
  };

  const handleMouseUpSearch = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex items-center space-x-2 mt-2 flex-wrap lg:flex-nowrap ">
        <Stack direction="row" className="flex">
          <FormControl
            sx={{ m: 1, width: "45ch", margin: "0" }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-text"
              color="none"
              size="small"
            >
              Search
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-text"
              type="text"
              color="none"
              size="small"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={"Search input"}
                    // onClick={handleClickSearch}
                    // onMouseDown={handleMouseDownSearch}
                    // onMouseUp={handleMouseUpSearch}
                    edge="end"
                  >
                    {/* {showPassword ? <VscEye /> : <VscEyeClosed />} */}
                    <VscSearch />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <IconButton
            size="medium"
            sx={{ marginLeft: 2, color: "maroon", padding: 0 }}
            onClick={() => setOpenFilterDialog(true)}
          >
            {" "}
            <StyledBadge badgeContent={filterValue.length} color="inherit">
              <FilterListIcon sx={{ fontSize: "2rem" }} />
            </StyledBadge>
          </IconButton>
        </Stack>
        <span className="text-center sm:max-lg:text-right sm:max-lg:w-[35%] w-[100%] font-arialblack text-red-800 text-2xl">
          <b>{albumLabel}</b>
        </span>
        <div className="w-[100%] flex text-center justify-end space-x-2 sm:z-50 sm">
          <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
            useFlexGap
            // sx={{ flexWrap: "wrap" }}
          >
            {/* spacing={{ xs: 1, sm: 2 }}
            direction="row" */}
            {previousRecord.length > 0 && (
              <Button
                {...muiAlbumActionButtonProp}
                onClick={() => isPreviousRecordClicked(previousRecord)}
                startIcon={<VscArrowLeft />}
              >
                Back
              </Button>
            )}
            {viewModeType === "grid" && (
              <Button
                {...muiAlbumActionButtonProp}
                startIcon={<SelectAllSharpIcon />}
              >
                SelectAll
              </Button>
            )}
            {/* VIEW BUTTON */}
            {/* <Button {...muiAlbumActionButtonProp} startIcon={<VscEye />}>
              View
            </Button> */}
            {/* {viewModeType === "grid" && (
              <Button {...muiAlbumActionButtonProp} startIcon={<VscEdit />}>
                Rename
              </Button>
            )} */}
            <Button {...muiAlbumActionButtonProp} startIcon={<VscTrash />}>
              Delete
            </Button>
            <ThemeProvider theme={theme}>
              <Button
                size="small"
                variant="contained"
                // onClick={isCreateAlbumClicked}
                onClick={handleClick}
                {...muiAlbumActionButtonProp}
                sx={{
                  minWidth: "130px",
                  borderRadius: "50px",
                }}
                startIcon={<AddIcon />}
              >
                Add New
              </Button>
            </ThemeProvider>
          </Stack>

          <IconButton
            size="large"
            className="p-0 sm:z-40"
            onClick={() =>
              isAlbumViewModeClicked(viewModeType == "grid" ? "table" : "grid")
            }
          >
            {viewModeType == "grid" ? <GridViewIcon /> : <VscListUnordered />}
          </IconButton>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
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
        <MenuItem onClick={isCreateAlbumClicked} sx={{ height: "50px" }}>
          <CreateNewFolderIcon sx={menuitemicon} /> Create Album
        </MenuItem>
        <MenuItem
          onClick={() => isUploadPhotoClicked("Photo")}
          sx={{ height: "50px" }}
        >
          <AddAPhotoIcon sx={menuitemicon} /> Upload Photos
        </MenuItem>
        <MenuItem
          onClick={() => isUploadPhotoClicked("Folder")}
          sx={{ height: "50px" }}
        >
          <DriveFolderUploadIcon sx={menuitemicon} /> Batch Folder Upload
        </MenuItem>
      </Menu>
      <SearchFilterDialog
        openFilterDialog={openFilterDialog}
        isFilterDialogClose={handleFilterDialogClose}
        isFilterDialogSave={handleFilterDialogSave}
      />
    </>
  );
}
// () => isUploadPhotoClicked("folder")
