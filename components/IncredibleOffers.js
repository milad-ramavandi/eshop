import React from 'react'
import styles from './IncredibleOffers.module.css'
import Image from 'next/image'
import Carusel from './Carusel'
import Link from 'next/link'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
const IncredibleOffers = (props) => {
  return (
    <div className={styles.IncredibleOffersContainer}>
        <div className={styles.rightContainer}>
          <div className={styles.firstImageContainer}><Image src='/images/amazingTypo.png' width={70} height={70} alt='amazingTypo' className={styles.img_1}/></div>
          <div className={styles.secondImageContainer}><Image src='/images/box.png' width={120} height={100} alt='box' className={styles.img_2}/></div>
          <div><Link href='products/incredibleOffers' className={styles.link}>مشاهده همه <MdOutlineKeyboardArrowLeft/></Link></div>
        </div>
        <div className={styles.leftContainer}><Carusel cardsCount={props.count} data={props.data}/></div>
    </div>
  )
}

export default IncredibleOffers