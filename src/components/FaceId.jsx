import { Avatar, Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import FaceLinks from "../context/FaceLinks";

function FaceId() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        pageMenu={[
          { name: "Home", link: "/dashboard" },
          { name: "Album", link: "/album" },
          { name: "Tags", link: "/tags" },
          { name: "Upload Photos", link: "/upload" },
        ]}
      />
      <div className="w-[75%] m-auto mt-8">
        <div className="text-center text-2xl font-bold text-red-800">FACES</div>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="flex justify-end"
        >
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

        <div className="!w-[80%] min-h-[70vh] m-auto my-8">
          <div className="grid grid-cols-5">
            {FaceLinks.map((face) => (
              <div
                key={face.id}
                className="flex justify-center items-center flex-col cursor-pointer"
              >
                <Avatar
                  alt={face.alt}
                  src={face.src}
                  sx={{ width: 90, height: 90 }}
                  className="border-2 border-gray-300 m-4 flex justify-center"
                />
                <span className="text-sm text-center text-custom-red">
                  {face.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FaceId;
