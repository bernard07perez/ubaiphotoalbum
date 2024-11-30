import React, { useRef, useState } from "react";
import Images from "./utils/RandomImages";
import logo from "../assets/img/UbAiPhotoAlbum_Logo.png";
import WarningMessage from "./utils/WarningMessage";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import CheckBox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const subButtonStyle = {
  color: "#d13533",
  "&:hover": { color: "maroon", fontWeight: "bold" },
};

const mainButtonStyle = {
  backgroundColor: "#852221",
  "&:hover": {
    backgroundColor: "#ffa500",
  },
  color: "#fff",
};

export default function Register() {
  const [imageFiles, setImageFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [excessPhotoModal, setExcessPhotoModal] = useState(false);
  const excessPhotoCtr = useRef(0);

  const fileImageChange = (event) => {
    const numberOfImageToAccept = 10 - imageFiles.length;
    const Files = event.target.files;
    excessPhotoCtr.current =
      Files.length > numberOfImageToAccept
        ? Files.length - numberOfImageToAccept
        : 0;

    if (excessPhotoCtr.current > 0) {
      setExcessPhotoModal(true);
    }

    const imageFileArray = Array.from(Files)
      .slice(0, numberOfImageToAccept)
      .map((file) => URL.createObjectURL(file));
    setImageFiles((prevImageFileArray) =>
      prevImageFileArray.concat(imageFileArray)
    );
  };

  const selectedImageChange = (index) => {
    setSelectedImage((prevSelectedItems) =>
      prevSelectedItems.includes(index)
        ? prevSelectedItems.filter((item) => item !== index)
        : [...prevSelectedItems, index]
    );
  };

  const handleRemoveSelected = () => {
    const remainingImages = imageFiles.filter(
      (_, index) => !selectedImage.includes(index)
    );
    setSelectedImage([]);
    setImageFiles(remainingImages);
  };

  const handleExcessPhotoClose = () => {
    setExcessPhotoModal(false);
  };
  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        alignContent={"top"}
        style={{
          background:
            "linear-gradient(180deg, #421110 0%, #7e0404 40%, #dde1ed 100%)",
        }}
      >
        <div style={{ filter: "blur(5px)", opacity: "80%" }}>
          <Images />
        </div>

        <Box
          id="LogIn"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            position: "absolute",
            top: "20vh",
            left: "50vw",
            transform: "translateX(-50%)",
            backgroundColor: "#ffa500",
            border: "0px solid",
            borderRadius: "20px 20px",
          }}
        >
          <div className="w-[23vw] min-h-96 min-w-64 max-w-md p-8 bg-white rounded-xl shadow-md backdrop-blur-sm ">
            <Typography
              variant="h6"
              className="text-center pb-4 text-custom-maroon"
            >
              Register
            </Typography>
            <Box component="form" noValidate="off">
              <div className="space-y-4">
                <TextField
                  label="First Name"
                  name="firstname"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  name="lastname"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Mobile"
                  name="mobile"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Password"
                  name="password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
              </div>
              <Button
                fullWidth
                type="submit"
                variant="text"
                sx={{ ...mainButtonStyle, marginTop: "10px" }}
              >
                Register
              </Button>
            </Box>

            {/*Login Link*/}
            <div className="flex justify-center text-sm mt-4">
              <span className="text-gray-600">
                Already have an account?&nbsp;
              </span>
              <Link
                onClick={() => {
                  window.location.href = "/";
                }}
                className="text-custom-maroon hover:underline cursor-pointer"
              >
                Sign In
              </Link>
            </div>
          </div>
          <Box
            id="description"
            width={"35vw"}
            sx={{
              marginTop: "0",
              paddingLeft: "3rem",
              position: "relative",
            }}
          >
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <img src={logo} className="w-20 h-20" />

              <Box
                sx={{
                  backgroundColor: "#852221",
                  width: "45px",
                  height: "35px",
                  margin: "1rem .2rem 1rem .2rem",
                  textAlign: "center",
                  alignContent: "center",
                  border: "0 solid",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h5" fontFamily="Arial Black" color="white">
                  AI
                </Typography>
              </Box>
              <span className="flex align-bottom border-b-4">
                <Typography variant="h5" fontFamily="Arial Black" color="white">
                  Photo Album
                </Typography>
              </span>
            </Stack>
            <Typography
              color="white"
              variant="subtitle1"
              sx={{ marginRight: "2rem", marginTop: "1rem" }}
            >
              <p className="indent-8 text-justify text-ellipsis mb-2">
                We encourage you to add up to 10 photos of yourself to help AI
                Face ID recognize your face with accuracy.
              </p>
            </Typography>
            <Stack direction={"row"} marginRight={6}>
              {selectedImage.length > 0 && (
                <Button
                  startIcon={<DeleteOutlineIcon />}
                  sx={{
                    ...subButtonStyle,
                  }}
                  onClick={handleRemoveSelected}
                >
                  Remove Photo
                </Button>
              )}
              <Box flexGrow={1} />
              <input
                id={"raised-button-file-register"}
                key={"in1ky"}
                type="file"
                multiple={true}
                accept="Image/*"
                onChange={fileImageChange}
                style={{ display: "none" }}
              />
              <label
                key={"lb1ky"}
                id={"lb1id"}
                htmlFor={"raised-button-file-register"}
              >
                <Button
                  key={"btn1ky"}
                  id={"btn1id"}
                  size="small"
                  variant="text"
                  component="span"
                  sx={{
                    ...subButtonStyle,
                  }}
                  endIcon={<AddAPhotoIcon sx={{ marginRight: "5px" }} />}
                >
                  photo
                </Button>
              </label>
            </Stack>
            <Box
              position={"absolute"}
              color={"white"}
              width={"85%"}
              minHeight={280}
              backgroundColor={"white"}
              // overflow={"auto"}
              // sx={{ maxHeight: "290px" }} // Set a max-height to enable scrolling
            >
              <ImageList
                key={"imglstky"}
                id={"imglstid"}
                gap={6}
                cols={3}
                rowHeight={100}
                // height="100%"
                sx={{
                  border: "1px solid",
                  minHeight: "280px",
                  maxHeight: "280px",
                  margin: "5px",
                }}
              >
                {imageFiles.map((img, index) => (
                  <ImageListItem
                    key={index + "imglstIky"}
                    id={index + "imglstIid"}
                    sx={{
                      contain: "content",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      key={index + "imglstIky"}
                      id={index + "imglstIid"}
                      src={img}
                      alt={`Image ${index}`}
                      loading="lazy"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
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
                      checked={selectedImage.includes(index)}
                      onChange={() => {
                        selectedImageChange(index);
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
        </Box>
      </Box>
      <WarningMessage
        open={excessPhotoModal}
        onClose={handleExcessPhotoClose}
        title="Upload photo"
        warnBody={
          <>
            There is/are{" "}
            <b className="text-red-800">
              {" "}
              {excessPhotoCtr.current} photo(s) removed
            </b>{" "}
            from your selection. <b>Only 10 photos</b> are allowed to be
            uploaded upon registration.
          </>
        }
      />
    </>
  );
}
