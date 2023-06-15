import React from 'react'
import styles from './LoginErrorMessage.module.css'
const LoginErrorMessage = (props) => {
  return (
    <div><p className={styles.errorMessage}>{props.children}</p></div>
  )
}

export default LoginErrorMessage