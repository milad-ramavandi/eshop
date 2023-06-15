import React from "react";
import Image from "next/image";
import styles from './ItemIncredibleOffer.module.scss'

const ItemIncredibleOffer = (props) => {
  return (
    <div className={styles.ItemIncredibleOfferContainer}>
      <div className={`${styles.incredibleOfferImageContainer}`}>
        {props.data.incredibleOffers === true ? (
          <Image
            className={`${styles.incredibleOfferImage}`}
            alt={props.data.name}
            src="/images/IncredibleOffer.svg"
            width={200}
            height={15}
          />
        ) : null}
      </div>
      <p align="justify" className={`${styles.productName}`}>
        {props.data.name.substring(0, 20)}
        {props.data.name.length > 20? "..." : null}
      </p>

      <Image
        alt={props.data.name}
        src={props.data.indexImageUrl}
        width={150}
        height={150}
        className={styles.indexImageUrl}
      />
      {props.data.priceWithDiscount === 0 ? (
        <div className={`${styles.priceContainer}`}>
          {props.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          تومان
        </div>
      ) : (
        <div className={`${styles.priceDetail}`}>
          <div className={`${styles.priceContainer}`}>
            <div className={`${styles.priceBeforeOff}`}>
              {props.data.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
            <div className={styles.priceWithDiscount}>
              {props.data.priceWithDiscount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
          </div>
          <label className={`${styles.offPercent}`}>
            {Math.floor(
              ((props.data.price - props.data.priceWithDiscount) /
                props.data.price) *
                100
            )}
            %
          </label>
        </div>
      )}
    </div>
  );
};

export default ItemIncredibleOffer;
