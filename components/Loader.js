import Image from "next/image";
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Spinner from "react-bootstrap/Spinner";
import styles from './Loader.module.scss'
const Loader = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/images/logo.svg" width={120} height={50} alt="logo" className={styles.img} />
      </div>
      <div>
        <Spinner animation="border" className={styles.spinner}/>
      </div>
    </div>
  );
};

export default Loader;
