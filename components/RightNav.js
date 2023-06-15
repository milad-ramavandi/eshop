import React from "react";
import { bool, func } from "prop-types";
import { IoIosArrowForward } from 'react-icons/io';
const RightNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon"
      style={{fontSize:'30px', position:'absolute', right:'0', top:'50%'}}
      disabled={disabled}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <IoIosArrowForward/>
    </button>
  );
});

RightNav.displayName = "RightNav";

RightNav.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default RightNav;
