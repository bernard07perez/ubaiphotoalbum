import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#434448", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "#852221", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#852221", // Border color when focused
            },
          },
          "& .MuiInputLabel-root": {
            color: "#380e0e", // Label color
          },
          "& .MuiInputBase-input": {
            color: "#852221", // Input text color
          },
        },
      },
    },
  },
});

export default function CreateAlbumDialogs({
  openImageDialog,
  onImageDialogClose,
  onImageUploadRequest,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openImageDialog);
  }, [openImageDialog]);

  return (
    <React.Fragment>
      <BootstrapDialog
        // onClose={onImageDialogClose}
        aria-labelledby="create-album-dialog"
        open={open}
        keepMounted
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "#852221" }}
          id="create-album-dialog"
        >
          <FolderOpenIcon sx={{ fontSize: "3rem" }} />
          Create Album
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onImageDialogClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <ThemeProvider theme={theme}>
            <TextField
              label="Album Name"
              fullWidth
              sx={{
                color: "maroon",
                "&.Mui-focused": { color: "maroon" },
              }}
            />
            <TextField
              label="Year"
              className="!mt-2"
              fullWidth
              sx={{
                color: "maroon",
                "&.Mui-focused": { color: "maroon" },
              }}
            />
          </ThemeProvider>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="inherit"
            onClick={onImageUploadRequest}
            sx={{
              margin: "1rem 2rem",
              color: "#852221",
              width: 80,
              "&:hover": { background: "#852221", color: "white" },
            }}
          >
            Create
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
