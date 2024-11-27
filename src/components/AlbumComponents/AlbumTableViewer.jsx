import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";

import { UsersTb } from "../../context/UsersTb.js";

import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import FolderIcon from "@mui/icons-material/Folder";
import SearchIcon from "@mui/icons-material/Search";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

import { alpha } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import { Link } from "react-router-dom";

import PhotoDialog from "../PhotoComponents/PhotoDialog.jsx";
import ImageWithFallback from "../utils/ImageWithFallback.jsx";

const muiAlbumActionButtonProp = {
  size: "small",
  color: "#b27300",
  className: "text-[#b27300] hover:text-red-900 hover:font-semibold",
};
// 7f1d1d

export default function AlbumTableViewer({
  isAlbumClick,
  isEditAlbumClick,
  retrieveData,
}) {
  const [openDialog, setOpen] = useState(false);

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
      <TableContainer component={Paper} className="shadow-lg rounded-lg mb-8">
        <Table>
          <TableHead className="bg-[#767676] h">
            <TableRow>
              <TableCell className="!text-white">#</TableCell>
              <TableCell className="!text-white">Type</TableCell>
              <TableCell className="!text-white">Name</TableCell>
              <TableCell className="!text-white">Year</TableCell>
              <TableCell className="!text-white">Owner</TableCell>
              <TableCell className="!text-white !text-center">
                Content
              </TableCell>
              <TableCell className="!text-white !text-center">Tags</TableCell>
              <TableCell className="!text-white !text-center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {retrieveData.map((item, indx) => (
              <>
                <TableRow key={`tblrow-${indx}`}>
                  <TableCell>{`${indx + 1}`}</TableCell>
                  <TableCell>
                    {item.type === "folder" ? (
                      <FolderIcon sx={{ color: "#eabf45" }} />
                    ) : (
                      <InsertPhotoOutlinedIcon sx={{ color: "#eabf45" }} />
                    )}
                  </TableCell>
                  <TableCell>
                    {item.type === "folder" ? (
                      <Button
                        variant="text"
                        sx={{ color: "#991b1b" }}
                        onClick={() => isAlbumClick(item.Name, item.contents)}
                      >
                        <a className="hover:underline">{item.Name}</a>
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        sx={{ color: "#991b1b" }}
                        onClick={() => handlePhotoViewerDialogOpen("")}
                      >
                        {item.Name}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>{item.DateCreated}</TableCell>
                  <TableCell>
                    {UsersTb.filter((user) => user.id === item.Owner)[0].uFname}
                  </TableCell>
                  <TableCell>{item?.contents?.length}</TableCell>
                  <TableCell>{item?.tags["keywordtag"]}</TableCell>
                  <TableCell>
                    <Stack direction={"row-reverse"} spacing={2}>
                      <Button
                        size="small"
                        {...muiAlbumActionButtonProp}
                        startIcon={<Delete />}
                      >
                        Delete
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Edit />}
                        {...muiAlbumActionButtonProp}
                        onClick={isEditAlbumClick}
                      >
                        Edit
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={10}
        page={0}
        rowsPerPage={5}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        labelRowsPerPage="Rows per page"
        rowsPerPageOptions={[5, 10, 25]}
        className="mt-4"
      />
      <PhotoDialog
        id="photo-viewer-table"
        key="photo-viewer-table"
        keepMounted
        open={openDialog}
        onClose={handlePhotoViewerDialogClose}
        value={""}
      />
    </>
  );
}
