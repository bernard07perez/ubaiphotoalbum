import Header from "../HeaderFooter/Header";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";
import Footer from "../HeaderFooter/Footer";

const Tags = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        pageMenu={[
          { name: "Home", link: "/dashboard" },
          { name: "Album", link: "/album" },
          { name: "Faces", link: "/faces" },
          { name: "Upload Photos", link: "/upload" },
        ]}
      />

      {/* Search and Title */}
      <div className="w-[75%] m-auto mt-8">
        <div className="text-center text-2xl font-bold text-red-800">TAGS</div>
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
      </div>

      {/*Table*/}
      <TableContainer
        component={Paper}
        className="shadow-lg rounded-lg !w-[75%] m-auto my-8"
      >
        <Table>
          <TableHead className="bg-red-800">
            <TableRow>
              {["Name", "Created Date", "Owner", "Total Photos"].map(
                (header, index) => (
                  <TableCell key={index} className="!text-white ">
                    <TableSortLabel
                      active={false}
                      direction="asc"
                      sx={{
                        color: "white !important",
                        "&:hover": { color: "white !important" },
                        "& .MuiTableSortLabel-icon": {
                          color: "white !important",
                        },
                      }}
                    >
                      {header}
                    </TableSortLabel>
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3].map((row, index) => (
              <TableRow key={index}>
                <TableCell>Sample Event</TableCell>
                <TableCell>01/01/2024 12:00 PM</TableCell>
                <TableCell>Marjory Del Rosario</TableCell>
                <TableCell>100</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/*Pagination*/}
      <TablePagination
        component="div"
        count={10}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
        labelRowsPerPage="Rows per page"
        className="mt-4 !w-[75%] m-auto"
        sx={{
          "& .MuiPaginationItem-root": { color: "white" },
        }}
      />
      <Footer />
    </div>
  );
};

export default Tags;
