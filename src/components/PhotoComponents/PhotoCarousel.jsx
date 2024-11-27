import React from "react";
import Slider from "react-slick";
import { Box, Stack } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickArrow.css";

const imagess = [
  {
    src: "/img/OIP (4).jpg",
    alt: "Image 1",
  },
  {
    src: "/img/OIP (5).jpg",
    alt: "Image 2",
  },
  {
    src: "/img/digital-minimalism-benefits-696x464.jpg",
    alt: "Image 3",
  },
  // Add more images as needed
];

// Custom arrow components
const PreviousArrow = (props, images = null) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        width: "15%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(to right, rgba(0,0,0,0.7) 0%, " +
          "rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon fontSize="large" />
    </Box>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        width: "15%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(to left, rgba(0,0,0,0.7) 0%, " +
          "rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
        justifyContent: "flex-end",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon fontSize="large" />
    </Box>
  );
};

const PhotoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", display: "block" }}>
      <Slider {...settings} sx={{ display: "relative" }}>
        {imagess.map((image, index) => (
          <Box key={index} component="div" sx={{ textAlign: "center" }}>
            <img
              key={`imgcarousel-` + index}
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
        ))}
      </Slider>
    </Stack>
  );
};
export default PhotoCarousel;
