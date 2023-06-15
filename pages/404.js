import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import styles from './404.module.css'
import Image from 'next/image';

const notFound = () => {
  return (
    <div className={styles.notFound}>
      <p className={styles.para}>صفحه ای که دنبال آن بودید پیدا نشد!</p>
      <Link href="/" className={styles.link}>صفحه ی اصلی <MdOutlineKeyboardArrowLeft/></Link>
      <Image src='/images/notFound.png' width={600} height={300} alt='not_found' className={styles.img} />
    </div>
  )
}

export default notFound