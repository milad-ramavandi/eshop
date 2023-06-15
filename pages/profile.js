import Link from "next/link";
import React from "react";
import styles from "./profile.module.css";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
const profile = () => {
  const clickDeleteTokenHandler = () => {
    Cookies.remove("token");
  };
  return (
    <>
      <Helmet>
        <title>فروشگاه اینترنتی دیجی کالا</title>
        <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
      </Helmet>
      <div className={styles.profileContainer}>
        <p className={styles.para}>به پروفایل خود خوش آمدین</p>
        <Link
          href="/Login"
          className={styles.link}
          onClick={clickDeleteTokenHandler}
        >
          خروج
        </Link>
      </div>
    </>
  );
};

export default profile;
