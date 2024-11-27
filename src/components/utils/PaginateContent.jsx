import Pagination from "@mui/material/Pagination";

import React from "react";

const PaginateContent = () => {
  const [paginatePage, setPaginatePage] = React.useState(1);
  const handlePaginateChange = (event, value) => {
    setPaginatePage(value);
  };
  return (
    <>
      <Pagination
        count={10}
        page={paginatePage}
        onChange={handlePaginateChange}
      />
    </>
  );
};

export default PaginateContent;
