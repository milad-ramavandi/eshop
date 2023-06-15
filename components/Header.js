import React, { useEffect, useRef, useState } from "react";
import TopBanner from "./TopBanner";
import Image from "next/image";
import { globalFont } from "@/pages/_app";

import { CgSearch } from "react-icons/cg";
import { TbLogin } from "react-icons/tb";
import { TfiShoppingCart } from "react-icons/tfi";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { GiWallet } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Circle from "./Circle";
import { removeToken } from "@/redux/features/UserSlice";
import Cookies from "js-cookie";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBackGround, setShowBackGround] = useState(false);
  const storeData = useSelector((state) => state.shoppingCartReducer);
  const storeDataUser = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const router = useRouter();
  const clickInputHandler = () => {
    document.getElementById("delete").style.visibility = "visible";
  };
  const clickManageMenuHandler = (e) => {
    e.stopPropagation();
    setShowMenu((pre) => !pre);
    setShowBackGround((pre) => !pre);
  };
  const deleteTokenHandler = () => {
    // dispatch(removeToken());
    Cookies.remove('token');
  };
  const clickNavigateHandler = () => {
    if (searchRef.current.value === "") {
      router.push("/404");
    }
    router.push(`/products/search/${searchRef.current.value}`);
  };

  const clickDeleteHandler = () => {
    searchRef.current.value = "";
    document.getElementById("delete").style.visibility = "hidden";
  };
  useEffect(() => {
    const clickHideHandler = () => {
      setShowMenu(false);
      setShowBackGround(false);
    };
    window.addEventListener("click", clickHideHandler);
    return () => {
      window.removeEventListener("click", clickHideHandler);
    };
  });

  return (
    <div className={styles.outerContainer}>
      <div className={styles.TopBanner}>
        <TopBanner />
      </div>
      <div className={styles.TopLogo}>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={110}
            height={30}
            className={styles.TopLogoImage}
          />
        </Link>
      </div>
      <div className={styles.headerContainer}>
        <div className={`${styles.item} ${styles.container1}`}>
          <div className={`${styles.subContainer1_1}`}>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={110}
                height={30}
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={`${styles.subContainer1_2}`}>
            <input
              type="text"
              placeholder="جستجو"
              className={`${globalFont.className} ${styles.input}`}
              ref={searchRef}
              onClick={clickInputHandler}
            />
            <CgSearch
              className={styles.search}
              onClick={clickNavigateHandler}
            />
            <TiDelete
              className={styles.delete}
              onClick={clickDeleteHandler}
              id="delete"
            />
          </div>
        </div>
        <div className={`${styles.item} ${styles.container2}`}>
          {Cookies.get('token') ? (
            <div
              className={`${styles.subContainer2_1} ${
                storeDataUser.token
                  ? styles.subContainer2_1_noBorder
                  : styles.subContainer2_1_Border
              } ${
                showBackGround ? styles.subContainer2_1_showBackGround : null
              }`}
              onClick={clickManageMenuHandler}
            >
              <HiOutlineUser className={styles.HiOutlineUser} />
              <MdOutlineArrowDropDown
                className={styles.MdOutlineArrowDropDown}
              />

              <div
                className={`${styles.menu} ${
                  showMenu ? styles.showMenu : styles.hideMenu
                }`}
              >
                <ul className={styles.ul}>
                  <Link href="/profile" className={styles.bigLinkContainer}>
                    <div className={styles.rightInnerContainer}>
                      <FaRegUserCircle className={styles.userCircleIcon} />
                    </div>
                    <div className={styles.leftInnerContainer}>
                      <span className={styles.matn}>حساب کاربری</span>
                      <MdKeyboardArrowLeft className={styles.arrowLeftIcon} />
                    </div>
                  </Link>
                  <Link href="*" className={styles.smallLinkContainer}>
                    <div className={styles.rightInnerContainer}>
                      <GiWallet
                        className={`${styles.icon} ${styles.firstIcon}`}
                      />
                    </div>
                    <div className={styles.leftInnerContainer}>
                      <span className={styles.matn}>کیف پول</span>
                    </div>
                  </Link>
                  <Link href="*" className={styles.smallLinkContainer}>
                    <div className={styles.rightInnerContainer}>
                      <HiOutlineShoppingBag className={styles.icon} />
                    </div>
                    <div className={styles.leftInnerContainer}>
                      <span className={styles.matn}>سفارش ها</span>
                    </div>
                  </Link>

                  <Link href="*" className={styles.smallLinkContainer}>
                    <div className={styles.rightInnerContainer}>
                      <FiHeart className={styles.icon} />
                    </div>
                    <div className={styles.leftInnerContainer}>
                      <span className={styles.matn}>لیست ها</span>
                    </div>
                  </Link>
                  <Link href="*" className={styles.smallLinkContainer}>
                    <div className={styles.rightInnerContainer}>
                      <FaRegComment className={styles.icon} />
                    </div>
                    <div className={styles.leftInnerContainer}>
                      <span className={styles.matn}>دیدگاه ها</span>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    className={styles.smallLinkContainer}
                    onClick={deleteTokenHandler}
                  >
                    <div className={styles.rightInnerContainer}>
                      <RxExit className={styles.icon} />
                    </div>
                    <div className={styles.leftInnerContainer}>
                      <span className={styles.matn}>خروج از حساب کاربری</span>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
          ) : (
            <div className={styles.subContainer2_3}>
              <Link href="/Login" className={styles.link}>
                <TbLogin className={styles.TbLogin} />
                <span className={styles.span}> ورود </span>
                <span className={`${styles.span} ${styles.sabteNam}`}>
                  | ثبت نام
                </span>
              </Link>
            </div>
          )}
          <div className={styles.subContainer2_4}>|</div>
          <div className={styles.subContainer2_2}>
            <Link href="/ShoppingCart">
              <TfiShoppingCart className={styles.TfiShoppingCart} />
            </Link>
            {storeData.totalCount === 0 ? null : <Circle />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
