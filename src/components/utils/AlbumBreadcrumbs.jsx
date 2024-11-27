import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function AlbumBreadcrumbs({
  currentFolder = "Album",
  breadCrumbsItem = [],
  isPreviousRecordClick,
  sx,
}) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" {...sx}>
        <StyledBreadcrumb
          component="a"
          // href="#"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          onClick={() => isPreviousRecordClick([])}
        />
        {breadCrumbsItem.length > 1 &&
          breadCrumbsItem.slice(1, breadCrumbsItem.length).map((item, indx) => (
            <StyledBreadcrumb
              key={`sbc-${indx}`}
              component="a"
              // href="#"
              label={item.name}
              onClick={() => isPreviousRecordClick(item)}
            />
          ))}
        {breadCrumbsItem.length > 0 && breadCrumbsItem[0][0] !== 0 && (
          <StyledBreadcrumb label={currentFolder} />
        )}
      </Breadcrumbs>
    </div>
  );
}
