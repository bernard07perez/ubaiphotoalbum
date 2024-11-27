import { Stack, Container, Button } from "@mui/material";

import ViewerActions from "../utils/ViewerActions.jsx";
import AlbumGridViewer from "./AlbumGridViewer.jsx";
import PhotoViewer from "../PhotoComponents/PhotoViewer.jsx";
import LightBox from "../utils/ImageViewer.jsx";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";

import Header from "../HeaderFooter/Header.jsx";
import Footer from "../HeaderFooter/Footer.jsx";
import AlbumTableViewer from "./AlbumTableViewer.jsx";
import PaginateContent from "../utils/PaginateContent.jsx";
import UploadImageDialog from "../utils/UploadPhotosDialog.jsx";
import EditAlbumDialog from "./EditAlbumDialog.jsx";
import AlbumBreadcrumbs from "../utils/AlbumBreadcrumbs.jsx";
import { ALBUM_RECORDS } from "../../context/Album_Records.js";
import CreateAlbumDialogs from "./CreateAlbumDialogs.jsx";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

const newAlbumRecords = ALBUM_RECORDS;
let albumsName = "Albums";
let retrivePrevRecAncestor = [];

export default function MainAlbum() {
  const [viewerContent, setViewerContent] = useState(
    { viewMode: "grid", contents: newAlbumRecords } // viewMode value can be grid or table
  );

  const [openCreateAlbumDialog, setOpenCreateAlbumDialog] = useState(false);
  const [openUploadPhotosDialog, setOpenUploadPhotosDialog] = useState({
    openUploadDialog: false,
    uploadType: "Photo",
    uploadContainer: "",
  });

  const [editAlbumDialog, setEditAlbumDialog] = useState(false);

  const handleViewModeClick = (mode) => {
    setViewerContent(
      (prevViewerContent) =>
        (prevViewerContent = { ...prevViewerContent, viewMode: mode })
    );
  };

  const handleUploadPhotoDailogClose = () => {
    setOpenUploadPhotosDialog((prevOpenUploadPhotosDialog) => ({
      ...prevOpenUploadPhotosDialog,
      openUploadDialog: false,
    }));
  };

  const handleUploadPhotoRequest = (uploadedImageArr) => {
    handleUploadPhotoDailogClose();

    if (uploadedImageArr) {
      setValue(uploadedImageArr); //change the "setValue" for Image processing/manipulation pupose
    }
  };

  const handleUploadPhotoDailogOpen = (uploadType) => {
    setOpenUploadPhotosDialog({
      openUploadDialog: true,
      uploadType: uploadType,
      uploadContainer: {
        albumName: viewerContent.contents[0].Name,
        ancestor: viewerContent.contents[0].ancestor,
      },
    });
  };

  // function handleImageDailogClose() {
  //   setOpenCreateAlbumDialog(false);
  // }

  const handleCreateAlbClose = () => {
    setOpenCreateAlbumDialog(false);
  };

  const handleCreateAlbOpen = () => {
    setOpenCreateAlbumDialog(true);
  };

  const handleOpenAlbumClick = (albumName, albumRecord) => {
    albumsName = albumName;
    retrivePrevRecAncestor = albumRecord[0].ancestor;

    setViewerContent((prevViewerContent) => ({
      ...prevViewerContent,
      contents: [...albumRecord],
    }));
  };

  const handlePrevRecordClick = (prevRec) => {
    if (prevRec.length > 1) {
      let prevRecordData = ALBUM_RECORDS[prevRec[0] - 1];

      for (let index = 1; index < prevRec.length - 1; index++) {
        const element = prevRec[index] - 1;
        prevRecordData = prevRecordData.contents[element];
      }

      albumsName = prevRecordData.Name;
      retrivePrevRecAncestor = prevRecordData.ancestor;
      setViewerContent((prevViewerContent) => ({
        ...prevViewerContent,
        contents: [...prevRecordData.contents],
      }));
    } else {
      albumsName = undefined;
      retrivePrevRecAncestor = [];
      setViewerContent((prevViewerContent) => ({
        ...prevViewerContent,
        contents: newAlbumRecords,
      }));
    }
  };

  const handleEditAlbumOpen = () => {
    setEditAlbumDialog(true);
  };
  const handleEditAlbumClose = () => {
    setEditAlbumDialog(false);
  };

  let albumRecordsPull = viewerContent.contents;

  const retrievePrevFolders = (valAncestor) => {
    const prevAncestorArr = valAncestor.map((_, index) =>
      valAncestor.slice(0, index + 1)
    );

    return prevAncestorArr;
  };

  let arrBreadCrummbsNav = retrievePrevFolders(albumRecordsPull[0].ancestor);
  let showPhotoViewer = !(albumRecordsPull[0]?.ancestor[0] === 0);
  let albumRecords = [];
  let imageRecords = [];

  for (const record of albumRecordsPull) {
    if (record.type === "folder") {
      albumRecords = [...albumRecords, record];
    } else {
      imageRecords = [...imageRecords, record];
    }
  }

  let viewModeComponent;
  if (viewerContent.viewMode === "grid") {
    viewModeComponent = (
      <>
        {albumRecords.length > 0 && (
          <AlbumGridViewer
            isAlbumClick={handleOpenAlbumClick}
            isEditAlbumClick={handleEditAlbumOpen}
            retrieveData={albumRecords}
          />
        )}
        {showPhotoViewer && (
          <PhotoViewer
            retrieveData={imageRecords}
            isUploadPhotoClick={handleUploadPhotoDailogOpen}
          />
        )}
      </>
    );
  } else {
    viewModeComponent = (
      <AlbumTableViewer
        isAlbumClick={handleOpenAlbumClick}
        isEditAlbumClick={handleEditAlbumOpen}
        retrieveData={[...albumRecords, ...imageRecords]}
      />
    );
  }

  return (
    <>
      <Header
        pageMenu={[
          { name: "Home", link: "/dashboard" },
          { name: "Tags", link: "/tags" },
          { name: "Faces", link: "/faces" },
          { name: "Upload Photo", link: "/upload" },
        ]}
      />
      <Container maxWidth={false} sx={{ maxWidth: "90%" }}>
        <Stack className="flex flex-wrap w-[100%] min-h-10">
          <ViewerActions
            viewModeType={viewerContent.viewMode}
            albumLabel={albumsName}
            previousRecord={retrivePrevRecAncestor}
            isPreviousRecordClicked={handlePrevRecordClick}
            isCreateAlbumClicked={handleCreateAlbOpen}
            isAlbumViewModeClicked={handleViewModeClick}
            isUploadPhotoClicked={handleUploadPhotoDailogOpen}
          />
        </Stack>
        <Stack className="border-solid border-red-900 border-x border-y rounded-xl mt-4 p-2 justify-start min-h-96 relative">
          {viewerContent.viewMode === "grid" && (
            <AlbumBreadcrumbs
              currentFolder={albumsName}
              breadCrumbsItem={arrBreadCrummbsNav}
              isPreviousRecordClick={handlePrevRecordClick}
              sx={{ display: "flex", justifyContent: "center" }}
            />
          )}

          {viewModeComponent}

          <br />
          <br />
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"center"}
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {viewerContent.viewMode === "grid" && <PaginateContent />}
          </Stack>
        </Stack>
      </Container>
      <CreateAlbumDialogs
        openImageDialog={openCreateAlbumDialog}
        onImageDialogClose={handleCreateAlbClose}
      />
      <UploadImageDialog
        uploadType={openUploadPhotosDialog.uploadType}
        openImageDialog={openUploadPhotosDialog.openUploadDialog}
        onImageDialogClose={handleUploadPhotoDailogClose}
        onImageUploadRequest={handleUploadPhotoRequest}
      />
      <EditAlbumDialog open={editAlbumDialog} onClose={handleEditAlbumClose} />
      <Footer />
    </>
  );
}
