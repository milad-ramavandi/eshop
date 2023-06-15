import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import LeftNavMain from "./LeftNavMain";
import RightNavMain from "./RightNavMain";

const MainSlider = (props) => {
  return (
    <ReactImageGallery
      key={props.data.id}
      id={props.data.id}
      items={props.data}
      autoPlay={true}
      showPlayButton={false}
      showFullscreenButton={false}
      isRTL={true}
      lazyLoad={true}
      slideInterval={3000}
      showThumbnails={false}
      showBullets={false}
      renderLeftNav={(onClick, disabled) => (
        <LeftNavMain onClick={onClick} disabled={disabled}/>
      )}
      renderRightNav={(onClick, disabled) => (
        <RightNavMain onClick={onClick} disabled={disabled}/>
      )}
    />
  );
};

export default MainSlider;
