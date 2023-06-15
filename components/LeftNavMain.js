import React from "react";
import { bool, func } from "prop-types";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./LeftNavMain.module.scss";
const LeftNavMain = React.memo(({ disabled, onClick }) => {
  return (
    <div className={`${styles.leftNavContainer}`}>
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
          aria-label="Previous Slide"
        >
          <IoIosArrowBack className={styles.arrow} />
        </button>
      </div>
    </div>
  );
});

LeftNavMain.displayName = "LeftNavMain";

LeftNavMain.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default LeftNavMain;
