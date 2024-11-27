import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import Images from "./utils/RandomImages";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import StyleIcon from "@mui/icons-material/Style";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import UploadIcon from "@mui/icons-material/Upload";
import { red } from "@mui/material/colors";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./DashboardCss.css";
import { CardActions, Divider, Icon } from "@mui/material";

const muiAlbumActionButtonProp = {
  variant: "text",
  size: "small",
  color: "inherit",
  className: "text-red-800 hover:text-red-900 hover:font-semibold",
};

const sxButton = {
  sx: {
    padding: 0,
    minWidth: "auto",
    background: "none",
    textTransform: "none",
    boxShadow: "none",
    fontSize: "1.25rem",
  },
};

const Dashboard = () => {
  const albums = [
    "Christmas Party 2023",
    "Summer Outing 2024",
    "Outreach 2024",
    "At the Room 202",
  ];
  const tags = [
    "Investiture",
    "Outreach program",
    "Etesep defense",
    "Graduation 2022",
  ];
  const faces = ["Leogin", "Majo", "Mykel", "John", "Patrick", "Alfred"];

  const cardButtonStyle = {
    backgroundColor: "#852221",
    "&:hover": {
      backgroundColor: "#ffa500",
    },
    color: "#fff",
  };

  const splitToColumn = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const faceRows = splitToColumn(faces, 3);

  return (
    <>
      <Header />
      <Container
        maxWidth={false}
        sx={{ maxWidth: "90%", position: "relative" }}
      >
        <div style={{ filter: "blur(3px)", height: "70vh", opacity: "50%" }}>
          <Images />
        </div>
        <div
          className="flex flex-wrap gap-10 justify-center p-4 absolute top-[10%]  left-[50%] translate-x-[-50%] w-full" // w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
          style={{ margin: "0px auto" }}
        >
          {/* Albums */}

          <Card
            className="bg-white shadow-lg min-w-60 sm:w-fit"
            sx={{ borderRadius: "20px 20px 0 0", position: "relative" }}
          >
            {/* <CardHeader sx={{ height: "150px", backgroundColor: "#ffa500" }}> */}
            <CardHeader
              sx={{
                height: "100px",
                backgroundColor: "#ffa500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              avatar={
                <CameraOutlinedIcon
                  color="white"
                  sx={{
                    color: "white",
                    opacity: "60%",
                    width: 90,
                    height: 90,
                    marginLeft: "60%",
                  }}
                />
              }
            />
            {/* <CardMedia
                component="img"
                image="/img/u1.jpg"
                alt="Paella dish"
                sx={{ height: 200 }}
              /> */}
            <CardContent>
              <Button
                href="/album"
                fullWidth
                variant="contained"
                sx={{ ...cardButtonStyle }}
              >
                Albums
              </Button>
              <Stack marginTop={2}>
                {albums.map((album, index) => (
                  <Typography key={index} variant="subtitle1" className="p-1">
                    {album}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
            <CardActions
              sx={{
                backgroundColor: "#852221",
                // backgroundColor: "white",
                height: "70px",
                color: "white",
                padding: "0",
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            >
              <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"center"}
                alignItems={"center"}
              >
                <b className="text-xl">1,000</b>
                <span className="text-sm">albums</span>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "white" }}
              />
              <Box
                width={"50%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"row"}
                justifyItems={"center"}
                alignItems={"center"}
                padding={0}
                margin={1}
              >
                {" "}
                <label for="view-album">
                  <b>view albums</b>
                </label>
                <IconButton
                  id="view-album"
                  sx={{ "&:hover": { backgroundColor: "#ffa500" } }}
                  onClick={() => (window.location.href = "/album")}
                >
                  <KeyboardArrowRightIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
          {/* Tags */}
          <Card
            className="bg-white shadow-lg min-w-60"
            sx={{ borderRadius: "20px 20px 0 0", position: "relative" }}
          >
            {/* <CardHeader sx={{ height: "150px", backgroundColor: "#ffa500" }}> */}
            <CardHeader
              sx={{
                height: "100px",
                backgroundColor: "#ffa500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              avatar={
                <StyleIcon
                  color="white"
                  sx={{
                    color: "white",
                    opacity: "60%",
                    width: 90,
                    height: 90,
                    marginLeft: "60%",
                  }}
                />
              }
            />
            <CardContent>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ ...cardButtonStyle }}
                href="/tags"
              >
                Tags
              </Button>
              <Stack marginTop={2}>
                {tags.map((tag, index) => (
                  <Typography key={index} variant="subtitle1" className="p-1">
                    {tag}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
            <CardActions
              sx={{
                backgroundColor: "#852221",
                // backgroundColor: "white",
                height: "70px",
                color: "white",
                padding: "0",
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            >
              <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"center"}
                alignItems={"center"}
              >
                <b className="text-xl">999</b>
                <span className="text-sm">tags</span>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "white" }}
              />
              <Box
                width={"50%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"row"}
                justifyItems={"center"}
                alignItems={"center"}
                padding={0}
                margin={1}
              >
                {" "}
                <label for="view-tags">
                  <b>view tags</b>
                </label>
                <IconButton
                  id="view-tags"
                  sx={{ "&:hover": { backgroundColor: "#ffa500" } }}
                  onClick={() => (window.location.href = "/tags")}
                >
                  <KeyboardArrowRightIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
          {/* Faces */}
          <Card
            className="bg-white shadow-lg min-w-60"
            sx={{ borderRadius: "20px 20px 0 0", position: "relative" }}
          >
            {/* <CardHeader sx={{ height: "150px", backgroundColor: "#ffa500" }}> */}
            <CardHeader
              sx={{
                height: "100px",
                backgroundColor: "#ffa500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              avatar={
                <PeopleAltIcon
                  color="white"
                  sx={{
                    color: "white",
                    opacity: "60%",
                    width: 90,
                    height: 90,
                    marginLeft: "60%",
                  }}
                />
              }
            />
            <CardContent>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ ...cardButtonStyle }}
                href="/faces"
              >
                Faces
              </Button>
              <Stack marginTop={2}>
                {faceRows.map((row, rowIndex) => (
                  <Box
                    key={rowIndex}
                    className="flex justify-around mb-2 pt-2 hover:underline"
                  >
                    {row.map((face, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <Avatar className="bg-red-800">{face[0]}</Avatar>
                        <Typography variant="caption">{face}</Typography>
                      </div>
                    ))}
                  </Box>
                ))}
              </Stack>
            </CardContent>
            <CardActions
              sx={{
                backgroundColor: "#852221",
                // backgroundColor: "white",
                height: "70px",
                color: "white",
                padding: "0",
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            >
              <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"center"}
                alignItems={"center"}
              >
                <b className="text-xl">10,000</b>
                <span className="text-sm">faces</span>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "white" }}
              />
              <Box
                width={"50%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"row"}
                justifyItems={"center"}
                alignItems={"center"}
                padding={0}
                margin={1}
              >
                {" "}
                <label for="view-faces">
                  <b>view faces</b>
                </label>
                <IconButton
                  id="view-faces"
                  sx={{ "&:hover": { backgroundColor: "#ffa500" } }}
                  onClick={() => (window.location.href = "/faces")}
                >
                  <KeyboardArrowRightIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
          {/* Upload Photos */}
          <Card
            className="bg-white shadow-lg min-w-60 max-w-60"
            sx={{ borderRadius: "20px 20px 0 0", position: "relative" }}
          >
            {/* <CardHeader sx={{ height: "150px", backgroundColor: "#ffa500" }}> 2c2c2c*/}
            <CardHeader
              sx={{
                height: "100px",
                backgroundColor: "#ffa500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              avatar={
                <DriveFolderUploadIcon
                  color="white"
                  sx={{
                    color: "white",
                    opacity: "60%",
                    width: 90,
                    height: 90,
                    marginLeft: "60%",
                    // position: "absolute",
                  }}
                />
              }
            />
            <CardContent>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ ...cardButtonStyle }}
                href="/upload"
              >
                Upload Photos
              </Button>
              <Box className="qouteBox">
                <blockquote>
                  “Photographs open doors into the past, but they also allow a
                  look into the future.”
                  <br />
                  <br />
                  <cite>– Ansel Adams</cite>
                </blockquote>
              </Box>
            </CardContent>
            <CardActions
              sx={{
                backgroundColor: "#852221",
                // backgroundColor: "white",
                height: "70px",
                color: "white",
                padding: "0",
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            >
              <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"center"}
                alignItems={"center"}
              >
                <b className="text-xl">199,999</b>
                <span className="text-sm">uploads</span>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "white" }}
              />
              <Box
                width={"50%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"row"}
                justifyItems={"center"}
                alignItems={"center"}
                padding={0}
                margin={1}
              >
                {" "}
                <label for="upload-photo">
                  <b>upload photos</b>
                </label>
                <IconButton
                  id="upload-photo"
                  sx={{ "&:hover": { backgroundColor: "#ffa500" } }}
                  onClick={() => (window.location.href = "/upload")}
                >
                  <KeyboardArrowRightIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
