import React from "react";
import styles from "./DailySuggests.module.scss";
import CarouselDailySuggests from "./CarouselDailySuggests";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
const DailySuggests = (props) => {
  return (
    <div className={styles.dailySuggests}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>پیشنهادات روزانه</h2>
        <Link href='/products/dailySuggests' className={styles.link}>مشاهده همه <MdOutlineKeyboardArrowLeft/></Link>
      </div>
      <div className={styles.dailySuggestsContainer}>
        <CarouselDailySuggests cardsCount={props.count} data={props.data} />
      </div>
    </div>
  );
};

export default DailySuggests;
