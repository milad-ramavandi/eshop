import React from "react";
import { bool, func } from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./RightNavMain.module.scss";
const RightNavMain = React.memo(({ disabled, onClick }) => {
  return (
    <div className={`${styles.rightNavContainer}`}>
      <div style={{width:'100%', height:'100%', position:'relative'}}>
        <button
          type="button"
          className="image-gallery-icon"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform:`translate(-50%, -50%)`
          }}
          disabled={disabled}
          onClick={onClick}
          aria-label="Next Slide"
        >
          <IoIosArrowForward className={styles.arrow} />
        </button>
      </div>
    </div>
  );
});

RightNavMain.displayName = "RightNavMain";

RightNavMain.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default RightNavMain;
