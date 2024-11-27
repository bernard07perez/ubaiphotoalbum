import logo from "../../assets/img/UbAiPhotoAlbum_Logo.png";
import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Header({ pageMenu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header>
        <Container
          maxWidth={false}
          sx={{ display: "flex", alignItems: "center", maxWidth: "90%" }}
        >
          <Stack direction={"row"} alignItems={"center"} minWidth={"300px"}>
            <img src={logo} className="ubailogo" alt="Logo" />
            <Box
              sx={{
                backgroundColor: "#ffa500",
                width: "45px",
                height: "30px",
                margin: "1rem .2rem 1rem 1rem",
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
            <Typography
              variant="h5"
              fontFamily="Arial Black"
              width="100%"
              color="white"
            >
              Photo Album
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"center"}
            spacing={2}

            // sx={{ marginTop: "auto" }}
          >
            {pageMenu && (
              <>
                {pageMenu.map((item, indx) => (
                  <Button key={indx} href={item.link} sx={{ color: "white" }}>
                    {item.name}
                  </Button>
                ))}
              </>
            )}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              sx={{ display: { xs: "none", md: "block" } }}
              variant="h6"
              color="white"
              noWrap
            >
              <b>Juan Dela Cruz</b>
            </Typography>
            <Tooltip title="Notification">
              <IconButton sx={{ padding: "0", color: "#ffffff" }}>
                <Badge badgeContent={1} color="error">
                  <NotificationsOutlinedIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="User Loged-in">
              <IconButton onClick={handleClick}>
                <Avatar src={"/img/u1.jpg"} />
              </IconButton>
            </Tooltip>
          </Stack>
          {/* <div className="w-auto flex items-center justify-end space-x-4">
          <span className="flex space-x-2 text-gray-50 tex">
              <h4 className="hidden md:block">
                Hi <b>Hanna Sophia Muller</b>
              </h4>
            </span>
          </div> */}
        </Container>
      </header>
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
        <MenuItem onClick={() => (window.location.href = "/profile")}>
          <AccountCircleIcon /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ManageAccountsIcon /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => (window.location.href = "/")}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;
