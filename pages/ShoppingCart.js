import React, { useState } from "react";
import styles from "./shoppingCart.module.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineSafety } from "react-icons/ai";
import { MdStorefront } from "react-icons/md";
import { TfiTruck } from "react-icons/tfi";
import { deleteItems } from "@/redux/features/ShoppingCartSlice";
import ManageItem from "@/components/ManageItem";
import Message from "@/components/Message";
import { Helmet } from "react-helmet";

const ShoppingCart = () => {
  const [showToast, setShowToast] = useState(false);
  const storeData = useSelector((state) => state.shoppingCartReducer);
  const clickManageToastShowHandler = () => {
    setShowToast(true);
  };
  const dispatch = useDispatch();
  if (storeData.totalCount === 0) {
    return (
      <>
        <Helmet>
          <title>فروشگاه اینترنتی دیجی کالا</title>
          <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
        </Helmet>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.emptyShoppingCart}>
                <div>
                  <Image
                    src="/images/emptyCart.svg"
                    width={300}
                    height={200}
                    alt="emptyCart"
                    className={styles.basketImage}
                  />
                </div>
                <h3 className={styles.emptyHeader}>سبد خرید شما خالی است!</h3>
                <Link href="/" className={styles.link}>
                  صفحه ی اصلی <MdOutlineKeyboardArrowLeft />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>فروشگاه اینترنتی دیجی کالا</title>
        <link rel="shortcut icon" href="/static/favicon_home/favicon.ico" />
      </Helmet>
      <Container className={styles.ShoppingCart}>
        <Row>
          <Col sm={12} md={12} lg={7} className={styles.rightContainer}>
            <Row>
              <Col className={styles.firstItem} sm={10} md={10} lg={10}>
                <h3 className={styles.header}>سبد خرید شما</h3>
                <span className={styles.span}>
                  {" "}
                  {storeData.totalCount} کالا
                </span>
              </Col>
              <Col className={styles.secondItem} sm={2} md={2} lg={2}>
                <span
                  className={styles.hazfeHame}
                  onClick={() => dispatch(deleteItems())}
                >
                  <VscTrash className={styles.trash} /> حذف همه
                </span>
              </Col>
            </Row>
            {storeData.items.map((item) => {
              return (
                <Row key={item.id} className={styles.rowItem}>
                  <Row>
                    <Col sm={3} md={3} lg={3}>
                      <div key={item.id}>
                        <Link href={`/products/${item.id}`}>
                          <Image
                            className={`${styles.img_1}`}
                            src={item.indexImageUrl}
                            width={140}
                            height={140}
                            alt="index-image"
                          />
                        </Link>
                      </div>

                      {item.incredibleOffers === true ? (
                        <div className={styles.imageContainer}>
                          <Image
                            className={`${styles.img_2}`}
                            alt={item.name}
                            src="/images/IncredibleOffer.svg"
                            width={140}
                            height={15}
                          />
                        </div>
                      ) : null}
                    </Col>
                    <Col sm={9} md={9} lg={9}>
                      <h3 className={styles.name}>{item.name}</h3>
                      <p className={styles.para}>
                        <AiOutlineSafety className={styles.icon} /> گارانتی
                      </p>
                      <p className={styles.para}>
                        <MdStorefront className={styles.icon} /> موجود در انبار
                        فروشنده
                      </p>
                      <p className={styles.para}>
                        <TfiTruck className={styles.icon} /> ارسال دیجی کالا از
                        یک روز کاری دیگر
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className={styles.fifthItem} sm={3} md={3} lg={3}>
                      <ManageItem
                        productID={item.id}
                        productStock={item.stock}
                      />
                    </Col>
                    <Col className={styles.myCol} sm={9} md={9} lg={9}>
                      <Row>
                        <Col sm={12} md={12} lg={12}>
                          {item.priceWithDiscount === 0 ? null : (
                            <p className={styles.takhfif}>
                              {(
                                (item.price - item.priceWithDiscount) *
                                item.count
                              )
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              تومان
                              <span className={styles.innerTakhfif}>
                                {" "}
                                تخفیف
                              </span>
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={8} md={8} lg={8}>
                          <p className={styles.price}>
                            {(item.price * item.count)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            تومان
                          </p>
                        </Col>
                        <Col sm={4} md={4} lg={4}>
                          <p className={styles.gheimat}>قیمت فروشنده</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Row>
              );
            })}
          </Col>
          <Col sm={12} md={12} lg={4} className={styles.leftContainer}>
            <Row>
              <Col className={styles.sixth} sm={6} md={6} lg={6}>
                <p className={styles.paras}>
                  قیمت کالا ها ({storeData.totalCount})
                </p>
              </Col>
              <Col className={styles.sixth} sm={6} md={6} lg={6}>
                <p className={styles.gheimats}>
                  {storeData.totalPriceWithoutDiscount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  تومان
                </p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.sixth} sm={6} md={6} lg={6}>
                <p className={styles.paras}>جمع سبد خرید</p>
              </Col>
              <Col className={styles.sixth} sm={6} md={6} lg={6}>
                <p className={styles.gheimats}>
                  {storeData.totalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  تومان
                </p>
              </Col>
            </Row>
            <Row className={styles.redRow}>
              <Col className={styles.sixth} sm={6} md={6} lg={6}>
                {storeData.totalPriceWithDiscount === 0 ? null : (
                  <p className={styles.paras}>سود شما از خرید</p>
                )}
              </Col>
              <Col className={styles.sixth} sm={6} md={6} lg={6}>
                {storeData.totalPriceWithDiscount === 0 ? null : (
                  <p id="myPara" className={styles.gheimats}>
                    <span style={{ marginLeft: "5px" }}>
                      ({Math.floor(storeData.totalDiscountPercent)}%)
                    </span>
                    {storeData.totalPriceWithDiscount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    تومان
                  </p>
                )}
              </Col>
            </Row>
            <Row>
              <Button
                variant="danger"
                className={styles.sapt}
                onClick={clickManageToastShowHandler}
              >
                ثبت سفارش
              </Button>
            </Row>
          </Col>
        </Row>
        <Message showToast={showToast} setShowToast={setShowToast} />
      </Container>
    </>
  );
};

export default ShoppingCart;
