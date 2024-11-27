import emptyimage from "../../assets/img/emptyphotos.png";
import { useState } from "react";

const ImageWithFallback = ({ src, alt, isImageClick, classArg }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    console.log("Image failed to load:", imgSrc, classArg);
    setImgSrc(emptyimage);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      onClick={isImageClick}
      className={classArg}
    />
  );
};

export default ImageWithFallback;
