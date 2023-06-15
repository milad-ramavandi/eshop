import React, { useState } from "react";
import { getMethodAxios } from "@/repository/AxiosRepository";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./[id].module.scss";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { getMethodFetch } from "@/repository/FetchRepository";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/ShoppingCartSlice";
import ManageItem from "@/components/ManageItem";
import { TbBellRinging } from "react-icons/tb";
import LeftNav from "@/components/LeftNav";
import RightNav from "@/components/RightNav";
import Link from "next/link";
import Message from "@/components/Message";
import { Helmet } from "react-helmet";

const ProductID = (props) => {
  const [showToast, setShowToast] = useState(false);
  const storeData = useSelector((state) => state.shoppingCartReducer);
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>مشخصات, قیمت و خرید {props.data.name}</title>
        <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
      </Helmet>
      <Container className={styles.container}>
        <Row>
          <Col sm={12} md={12} lg={4}>
            <ReactImageGallery
              key={props.data.id}
              id={props.data.id}
              items={props.data.images}
              autoPlay={false}
              showPlayButton={false}
              showFullscreenButton={false}
              isRTL={true}
              lazyLoad={true}
              slideInterval={3000}
              showNav={true}
              renderLeftNav={(onClick, disabled) => (
                <LeftNav onClick={onClick} disabled={disabled} />
              )}
              renderRightNav={(onClick, disabled) => (
                <RightNav onClick={onClick} disabled={disabled} />
              )}
            />
          </Col>
          <Col sm={12} md={12} lg={8} className={styles.secondCol}>
            <Row className={styles.secondRow}>
              <Col sm={12} md={12} lg={12} className={styles.name}>
                {props.data.name}
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={7} className={styles.description}>
                {props.data.description}
              </Col>
              <Col sm={12} md={12} lg={5} className={styles.outerContainer}>
                {props.data.stock === 0 ? (
                  <div>
                    <p className={styles.namojod}>ناموجود</p>
                    <Button
                      variant="danger"
                      className={styles.button}
                      onClick={() => setShowToast(true)}
                    >
                      <TbBellRinging className={styles.ring} /> خبرم کنید
                    </Button>
                  </div>
                ) : (
                  <p className={styles.gheimat}>قیمت فروشنده</p>
                )}
                {props.data.stock === 0 ? null : props.data
                    .priceWithDiscount === 0 ? (
                  <div className={`${styles.priceContainer}`}>
                    {props.data.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                {props.data.stock === 0 ? null : storeData.items.some(
                    (item) => item.id === props.data.id
                  ) ? (
                  <div className={styles.manageContainer}>
                    <ManageItem
                      productID={props.data.id}
                      productStock={props.data.stock}
                    />
                    <div className={styles.infoContainer}>
                      <div>
                        <p className={styles.para}>در سبد شما</p>
                      </div>
                      <div className={styles.linkContainer}>
                        <div className={styles.observe}>
                          <p>مشاهده</p>
                        </div>
                        <div>
                          <Link href="/ShoppingCart" className={styles.link}>
                            سبد خرید
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="danger"
                    className={styles.button}
                    onClick={() => dispatch(addItem(props.data))}
                  >
                    افزودن به سبد
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Message showToast={showToast} setShowToast={setShowToast} />
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const data = await getMethodAxios(
      `products/${context.params.ProductID}`
    ).then((res) => res.data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    if (error.response.status === 400) {
      return {
        notFound: true,
      };
    }
  }
}

export default ProductID;
