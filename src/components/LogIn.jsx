import React, { useState } from "react";
import logo from "../assets/img/UbAiPhotoAlbum_Logo.png";
import Images from "./utils/RandomImages";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

function LogIn() {
  const [logInContent, setLogInContent] = useState(true);

  const xButtonStyle = {
    backgroundColor: "#852221",
    "&:hover": {
      backgroundColor: "#ffa500",
    },
    color: "#fff",
  };

  function isLogInForm(bolPass) {
    setLogInContent(bolPass);
  }
  const logInForm = (
    <>
      <Typography variant="h6" className="text-center pb-4 text-custom-maroon">
        Log In
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <div className="space-y-4">
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            placeholder="username@ub.edu.ph"
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            placeholder="password"
            type="password"
            fullWidth
          />
        </div>
        <Button
          fullWidth
          type="button"
          variant="contained"
          sx={{ ...xButtonStyle, marginTop: "10px" }}
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Sign In
        </Button>
      </Box>

      {/* Forgot password and Register Links */}
      <div className="flex justify-between text-sm mt-8">
        <Link
          // to="/forgot-password"
          onClick={() => isLogInForm(false)}
          className="text-gray-600 hover:underline cursor-pointer"
        >
          Forgot password?
        </Link>
        <Link
          className="text-gray-600 hover:underline cursor-pointer"
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          Register
        </Link>
      </div>
    </>
  );

  const resetPasswordForm = (
    <>
      <Typography variant="h6" className="text-center pb-4 text-custom-maroon">
        Reset your password
      </Typography>
      <Box component="form" NoValidate autoComplete="off">
        <div className="space-y-4">
          <TextField label="Email" name="email" variant="outlined" fullWidth />
        </div>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ ...xButtonStyle, marginTop: "10px" }}
        >
          Submit
        </Button>
      </Box>
      {/*Back to Sign in*/}
      <div className="flex justify-center text-sm mt-4">
        <Link
          // to="/forgot-password"
          onClick={() => isLogInForm(true)}
          className="text-gray-600 hover:underline cursor-pointer"
        >
          Sign-in
        </Link>
      </div>
    </>
  );

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

        {/* Centered Login Form with Subtle Blur Effect */}
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
          {/* Login Form Modal */}
          <div className="w-[23vw] min-h-96 min-w-64 max-w-md p-8 bg-white rounded-xl shadow-md backdrop-blur-sm">
            {logInContent ? logInForm : resetPasswordForm}
          </div>
          <Box
            id="description"
            width={"35vw"}
            sx={{
              marginTop: "0",
              paddingLeft: "3rem",
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
              variant="h6"
              sx={{ marginRight: "2rem", marginTop: "1rem" }}
            >
              <p className="indent-8 text-justify text-ellipsis">
                This will be a short description about the AI Photo Album This
                will be a short description about the AI Photo Album This will
                be a short description about the AI Photo Album This will be a
                short description about the AI Photo Album This will be a short
                description about the AI Photo Album
              </p>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LogIn;
