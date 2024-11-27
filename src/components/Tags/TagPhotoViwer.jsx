import React from "react";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import ViewerActions from "../utils/ViewerActions";
import { Container, Stack, Box, Grid2, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { Fullscreen } from "@mui/icons-material";
import { border, borderRadius, styled } from "@mui/system";
import PhotoViewer from "../PhotoComponents/PhotoViewer";
import { FavoritesPhotos } from "../../context/FavoritesPhotos";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#7f1d1d",
  border: "0px solid",
  borderRadius: "15px 0 0 15px",
  height: "100%",
  width: "100%",
}));

export default function TagPhotoViwer() {
  console.log(FavoritesPhotos);
  return (
    <>
      <Header
        pageMenu={[
          { name: "Home", link: "/dashboard" },
          { name: "Albums", link: "/album" },
          { name: "Tags", link: "/tags" },
          { name: "Faces", link: "/faces" },
        ]}
      />

      <Container maxWidth={false} sx={{ maxWidth: "90%" }}>
        <Stack className="flex flex-wrap w-[100%] min-h-10 mt-4">
          <div className="text-center text-2xl font-bold text-red-800">
            Favorite Photos
          </div>
        </Stack>
        <Stack className="border-solid border-red-900 border-x border-y rounded-xl mt-4 p-2 justify-start min-h-[65vh] h-[65vh]">
          <PhotoViewer retrieveData={FavoritesPhotos} />
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
