import React from 'react'
import styles from './Circle.module.scss';
import { useSelector } from 'react-redux';
const Circle = () => {
    const storeData = useSelector(state => state.shoppingCartReducer)
  return (
    <div className={styles.circle}>{storeData.totalCount}</div>
  )
}

export default Circle