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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Autocomplete from "@mui/material/Autocomplete";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { ListItemButton } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddIcon from "@mui/icons-material/Add";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "50vw",
    maxWidth: "60vw",
    height: "auto",
    // minHeight: "500px",
    // maxHeight: "80vh",
  },
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

export default function SearchFilterDialog({
  openFilterDialog,
  isFilterDialogClose,
  isFilterDialogSave,
}) {
  const filterAttributes = [
    "Attribute 1",
    "Attribute 2",
    "Attribute 3",
    "Attribute 4",
  ];

  //Key Value Pair for this is {filterAttribute: "", filterValue: "", filterOperand: "and || or"}
  const [filterValue, setFilterValue] = useState([
    { field: "", filterValue: "", filtOperator: "" },
  ]);

  const handleFilterFieldChange = (newvalue, indx) => {
    setFilterValue((prevFilterValue) => {
      const updatedFilterValue = [...prevFilterValue];

      updatedFilterValue[indx] = {
        ...updatedFilterValue[indx],
        field: newvalue,
      };

      return updatedFilterValue;
    });
  };

  const handleFilterValueChange = (e, indx) => {
    setFilterValue((prevFilterValue) => {
      const updatedFilterValue = [...prevFilterValue];

      updatedFilterValue[indx] = {
        ...updatedFilterValue[indx],
        filterValue: e.target.value,
      };

      return updatedFilterValue;
    });
  };

  const handleFilterOperatorChange = (newvalue, indx) => {
    setFilterValue((prevFilterValue) => {
      const updatedFilterValue = [...prevFilterValue];

      updatedFilterValue[indx] = {
        ...updatedFilterValue[indx],
        filtOperator: newvalue,
      };

      return updatedFilterValue;
    });
  };

  const handleRemoveFilter = (indxArgs) => {
    setFilterValue((prevFilterValue) =>
      prevFilterValue.filter((_, indx) => indx !== indxArgs)
    );
  };

  const handleAddFilter = () => {
    setFilterValue((prevFilterValue) => [
      ...prevFilterValue,
      { field: "", filterValue: "", filtOperator: "" },
    ]);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        aria-labelledby="create-album-dialog"
        open={openFilterDialog}
        keepMounted
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "#852221" }}
          id="create-album-dialog"
        >
          <ManageSearchIcon sx={{ fontSize: "2rem" }} />
          Search Result Filter
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => isFilterDialogClose(filterValue)}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <ThemeProvider theme={theme}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                minHeight: 200,
              }}
            >
              {filterValue.map((filtVal, indx) => (
                <ListItem key={`lstI-${indx}`} sx={{ gap: 2 }}>
                  <Autocomplete
                    disablePortal
                    size="small"
                    options={filterAttributes}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Field" />
                    )}
                    value={filtVal.field}
                    onChange={(e, newValue) =>
                      handleFilterFieldChange(newValue, indx)
                    }
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Filter Value"
                    sx={{
                      color: "maroon",
                      "&.Mui-focused": { color: "maroon" },
                    }}
                    value={filtVal.filterValue}
                    onChange={(e) => handleFilterValueChange(e, indx)}
                  />
                  {filterValue.length > indx + 1 && (
                    <Autocomplete
                      disablePortal
                      size="small"
                      options={["and", "or"]}
                      sx={{ width: 150 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Operator" />
                      )}
                      value={filtVal.filtOperator}
                      onChange={(e, newValue) =>
                        handleFilterOperatorChange(newValue, indx)
                      }
                    />
                  )}
                  <IconButton onClick={() => handleRemoveFilter(indx)}>
                    <CancelOutlinedIcon
                      sx={{ color: "maroon", fontSize: "1.5rem" }}
                    />
                  </IconButton>
                </ListItem>
              ))}

              <ListItem sx={{ justifyContent: "right" }}>
                <IconButton onClick={handleAddFilter}>
                  <AddIcon sx={{ color: "maroon", fontSize: "2rem" }} />
                </IconButton>
              </ListItem>
            </List>
          </ThemeProvider>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="inherit"
            onClick={() => isFilterDialogSave(filterValue)}
            sx={{
              margin: "1rem 2rem",
              color: "#852221",
              "&:hover": { background: "#852221", color: "white" },
            }}
          >
            Filter Search
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
