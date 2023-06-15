import React from "react";
import { bool, func } from "prop-types";
import { IoIosArrowBack } from 'react-icons/io';

const LeftNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon"
      style={{fontSize:'30px', position:'absolute', left:'0', top:'50%'}}
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <IoIosArrowBack/>
    </button>
  );
});

LeftNav.displayName = "LeftNav";

LeftNav.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default LeftNav;
