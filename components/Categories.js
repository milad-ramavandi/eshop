import { getMethodAxios } from "@/repository/AxiosRepository";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './Categories.module.css';

const Categories = (props) => {
  return (
    <div className={styles.categories}>
      <div className={styles.headerContainer}>دسته بندی های دیجی کالا</div>
      <div className={styles.categoriesContainer}>
        {props.data.map((item) => {
          return (
            <div key={item.id} className={styles.linkContainer}>
              <Link href={`/products/category/${item.name}`} className={styles.link}>
                <Image src={`${item.image}`} width={150} height={150} alt="category_name"/>
                <span className={styles.categoryName}>{item.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
