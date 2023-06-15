import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TopBanner.module.scss";
import { getMethodAxios } from "@/repository/AxiosRepository";

const TopBanner = () => {
  const [topBannerData, setTopBannerData] = useState({});
  useEffect(() => {
    let cancel = false;
    getMethodAxios("topBanner").then((res) => {
      if (!cancel) {
        setTopBannerData(res.data);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <div>
      <a href={`${topBannerData.url}`} target="_blank">
        <Image
          className={styles.topBanner}
          fill={true}
          alt="topBanner"
          src={topBannerData.imageUrl}
        />
      </a>
    </div>
  );
};

export default TopBanner;
