import React from 'react'
import styles from './FooterErrorMessage.module.scss'
const FooterErrorMessage = (props) => {
  return (
    <div className={styles.error}><p>{props.children}</p></div>
  )
}

export default FooterErrorMessage