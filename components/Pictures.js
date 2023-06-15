import React from 'react'
import styles from './Pictures.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Pictures = () => {
  return (
    <div className={styles.PicturesContainer}>
        <div className={styles.leftImageContainer}>
            <Link href='/products/category/عینک' className={styles.linkContainer} target='_blank'><Image src='/images/glasses.webp' fill={true} alt='glasses' className={styles.img} title='حراج عینک'/></Link>
        </div>
        <div className={styles.rightImageContainer}>
            <Link href='/products/category/پوشاک بچگانه' className={styles.linkContainer} target='_blank'><Image src='/images/kids.webp' fill={true} alt='kids' className={styles.img} title='تیشرت و پیراهن بچگانه'/></Link>
        </div>
    </div>
  )
}

export default Pictures