import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";
import Delete from "@mui/icons-material/Delete";
import Header from "./HeaderFooter/Header.jsx";
import Footer from "./HeaderFooter/Footer.jsx";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Profile() {
  const [value] = React.useState(0);

  const images = [
    {
      id: 1,
      name: "Sample image 1",
      url: "https://picsum.photos/150?random=1",
    },
    {
      id: 2,
      name: "Sample image 2",
      url: "https://picsum.photos/150?random=2",
    },
    {
      id: 3,
      name: "Sample image 3",
      url: "https://picsum.photos/150?random=3",
    },
    {
      id: 4,
      name: "Sample image 4",
      url: "https://picsum.photos/150?random=4",
    },
    {
      id: 5,
      name: "Sample image 5",
      url: "https://picsum.photos/150?random=5",
    },
    {
      id: 6,
      name: "Sample image 6",
      url: "https://picsum.photos/150?random=6",
    },
    {
      id: 7,
      name: "Sample image 7",
      url: "https://picsum.photos/150?random=7",
    },
    {
      id: 8,
      name: "Sample image 8",
      url: "https://picsum.photos/150?random=8",
    },
    {
      id: 9,
      name: "Sample image 9",
      url: "https://picsum.photos/150?random=9",
    },
    {
      id: 10,
      name: "Sample image 10",
      url: "https://picsum.photos/150?random=10",
    },
    {
      id: 11,
      name: "Sample image 11",
      url: "https://picsum.photos/150?random=11",
    },
    {
      id: 12,
      name: "Sample image 12",
      url: "https://picsum.photos/150?random=12",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        pageMenu={[
          { name: "Home", link: "/dashboard" },
          { name: "Album", link: "/album" },
          { name: "Tag", link: "/tags" },
          { name: "Faces", link: "/faces" },
        ]}
      />

      <div className="w-[75%] m-auto mt-8">
        <div className="text-center text-2xl font-bold text-red-800">
          PROFILE
        </div>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="flex justify-between"
        >
          <Tabs>
            <Tab label="Photos of You" {...a11yProps(0)} />
            <Tab label="Photos Uploaded" {...a11yProps(1)} />
          </Tabs>
          <TextField
            id="input-with-icon-textfield"
            className="!rounded-lg px-4 bg-gray-100 !mb-2"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            size="small"
            placeholder="Search"
          />
        </Box>
        <CustomTabPanel value={value} index={1}>
          <div className="flex justify-between">
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Select All</label>
            </div>
            <Button variant="text" className="!text-custom-maroon">
              <Delete />
              Delete
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative p-2 rounded">
                <img
                  src={image.url}
                  alt={`Image ${index}`}
                  className="w-[260px] h-[150px] object-cover rounded"
                />
                <input type="checkbox" className="absolute top-2 left-2" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <Button variant="outlined" className="!mr-4">
              &larr; Previous
            </Button>
            <span>Pages 1/10</span>
            <Button variant="outlined" className="!ml-4">
              Next &rarr;
            </Button>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={0}>
          <div className="flex justify-between">
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Select All</label>
            </div>
            <Button variant="text" className="!text-custom-maroon">
              <Delete />
              Delete
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative p-2 rounded">
                <img
                  src={image.url}
                  alt={`Image ${index}`}
                  className="w-[260px] h-[150px] object-cover rounded"
                />
                <input type="checkbox" className="absolute top-2 left-2" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <Button variant="outlined" className="!mr-4">
              &larr; Previous
            </Button>
            <span>Pages 1/10</span>
            <Button variant="outlined" className="!ml-4">
              Next &rarr;
            </Button>
          </div>
        </CustomTabPanel>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
