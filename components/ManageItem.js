import React from "react";
import styles from "./ManageItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCountItem,
  increaseCountItem,
  removeItem,
} from "@/redux/features/ShoppingCartSlice";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
const ManageItem = (props) => {
  const storeData = useSelector((state) => state.shoppingCartReducer);
  const dispatch = useDispatch();
  return (
    <div className={styles.manageItem}>
      {storeData.items.filter((item) => item.id === props.productID)[0].count >=
      props.productStock ? (
        <span className={styles.span}>
          <BiPlus className={styles.BiPlus} />
        </span>
      ) : (
        <span
          className={styles.span}
          onClick={() => dispatch(increaseCountItem(props.productID))}
        >
          <BiPlus style={{cursor:'pointer'}}/>
        </span>
      )}
      <span className={styles.span}>
        {storeData.items.filter((item) => item.id === props.productID)[0].count}
      </span>
      <span className={styles.span}>
        {storeData.items.filter((item) => item.id === props.productID)[0]
          .count > 1 ? (
          <BiMinus
            onClick={() => dispatch(decreaseCountItem(props.productID))}
            style={{cursor:'pointer'}}
          />
        ) : (
          <VscTrash onClick={() => dispatch(removeItem(props.productID))} style={{cursor:'pointer'}} />
        )}
      </span>
    </div>
  );
};

export default ManageItem;
