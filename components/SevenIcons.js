import Image from "next/image";
import React from "react";
import styles from "./SevenIcons.module.scss";
const SevenIcons = (props) => {
  return (
    <div className={styles.sevenIconsContainer}>
      {props.data.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <a
              href={`products/${item.url}`}
              target="_blank"
              className={styles.link}
            >
              <Image
                src={`/images/${item.iconName}`}
                width={50}
                height={50}
                className={styles.img}
                alt={`${item.iconName}`}
              />
              <span className={styles.span}>{item.label}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SevenIcons;
