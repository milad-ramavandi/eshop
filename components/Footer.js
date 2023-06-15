import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Container,
  Row,
  Toast,
  ToastContainer,
  ToastHeader,
} from "react-bootstrap";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { globalFont } from "@/pages/_app";
import FooterErrorMessage from "./FooterErrorMessage";
const Footer = () => {
  const [show, setShow] = useState(false);
  const clickReturnToUpHandler = () => {
    window.scrollTo(0, 0);
  };
  const initialValues = {
    email: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("ایمیل شما نادرست است.")
      .required("اینجا را خالی نگذارید"),
  });
  const submitHandler = () => {
    setShow(true);
  };
  return (
    <Container className={styles.container}>
      <Row className={styles.firstRow}>
        <Col sm={4} md={3} lg={3} className={styles.ColLogo}>
          <Image
            src="/images/logoFarsi.svg"
            width={120}
            height={30}
            alt="logo_farsi"
            className={styles.img}
          />
        </Col>
        <Col sm={4} md={6} lg={6} className={styles.ColEmpty}></Col>
        <Col sm={4} md={3} lg={3} className={styles.ColReturn}>
          <div
            className={styles.returnToUpContainer}
            onClick={clickReturnToUpHandler}
          >
            <p className={styles.returnToUpContainerPara}>بازگشت به بالا</p>
            <MdKeyboardArrowUp className={styles.arrowUp} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className={styles.contactContainer}>
            <div className={styles.phoneNumberContainer}>
              <span className={styles.poshtibani}>تلفن پشتیبانی</span>
              <span className={styles.phoneNumber}>۶۱۹۳۰۰۰۰ - ۰۲۱</span>
            </div>
            <div className={styles.emptyDiv}>|</div>
            <div className={styles.infoContainer}>
              <p>۷ روز هفته ۲۴ ساعته پاسخگوی شما هستیم</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={`${styles.myRow}`}>
        <Col md={2} lg={2}>
          <div className={styles.introduceCntainer}>
            <Image
              src="/images/expressDelivery.svg"
              width={55}
              height={55}
              alt="express_delivery"
            />
            <span className={styles.fiveIconsSpan}>امکان تحویل اکسپرس</span>
          </div>
        </Col>
        <Col md={2} lg={2}>
          <div className={styles.introduceCntainer}>
            <Image
              src="/images/cashOnDelivery.svg"
              width={55}
              height={55}
              alt="cash_on_delivery"
            />
            <span className={styles.fiveIconsSpan}>امکان پرداخت در محل</span>
          </div>
        </Col>
        <Col md={2} lg={2}>
          <div className={styles.introduceCntainer}>
            <Image
              src="/images/support.svg"
              width={55}
              height={55}
              alt="support"
            />
            <span className={styles.fiveIconsSpan}>۷ روز هفته ۲۴ ساعته</span>
          </div>
        </Col>
        <Col md={2} lg={2}>
          <div className={styles.introduceCntainer}>
            <Image
              src="/images/daysReturn.svg"
              width={55}
              height={55}
              alt="days_return"
            />
            <span className={styles.fiveIconsSpan}>
              هفت روز ضمانت بازگشت کالا
            </span>
          </div>
        </Col>
        <Col md={2} lg={2}>
          <div className={styles.introduceCntainer}>
            <Image
              src="/images/originalProducts.svg"
              width={55}
              height={55}
              alt="original_products"
            />
            <span className={styles.fiveIconsSpan}>ضمانت اصل بودن کالا</span>
          </div>
        </Col>
      </Row>
      <Row className={styles.secondRow}>
        <Col sm={6} md={6} lg={2} className={styles.firstCol}>
          <h3 className={styles.header}>با دیجی کالا</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="*">اتاق خبر دیجی کالا</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">فروش در دیجی کالا</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">فرصت های شغلی</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">گزارش تخلف در دیجی کالا</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">تماس با دیجی کالا</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">درباره دیجی کالا</Link>
            </li>
          </ul>
        </Col>
        <Col sm={6} md={6} lg={3} className={styles.firstCol}>
          <h3 className={styles.header}>خدمات مشتریان</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="*">پاسخ به پرسش های متداول</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">رویه های بازگرداندن کالا</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">شرایط استفاده</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">حریم خصوصی</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">گزارش باگ</Link>
            </li>
          </ul>
        </Col>
        <Col sm={6} md={12} lg={3} className={styles.firstCol}>
          <h3 className={styles.header}>راهنمای خرید از دیجی کالا</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="*">نحوه ثبت سفارش</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">رویه ارسال سفارش</Link>
            </li>
            <li className={styles.li}>
              <Link href="*">شیوه های پرداخت</Link>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={12} lg={4} className={styles.firstCol}>
          <Row className={styles.thirdRow}>
            <Col sm={6} md={6} lg={12} className={styles.colHeader}>
              <h3 className={styles.header}>همراه ما باشید!</h3>
            </Col>
            <Col sm={6} md={6} lg={12} className={styles.secondCol}>
              <Row className={styles.fifthRow}>
                <Col sm={3} md={2} lg={3} className={styles.colIcon}>
                  <Link href="*">
                    <BsInstagram className={styles.icon} />
                  </Link>
                </Col>
                <Col sm={3} md={2} lg={3} className={styles.colIcon}>
                  <Link href="*">
                    <BsTwitter className={styles.icon} />
                  </Link>
                </Col>
                <Col sm={3} md={2} lg={3} className={styles.colIcon}>
                  <Link href="*">
                    <BsLinkedin className={styles.icon} />
                  </Link>
                </Col>
                <Col sm={3} md={2} lg={3} className={styles.colIcon}>
                  <Link href="*">
                    <SiAparat className={styles.icon} />
                  </Link>
                </Col>
              </Row>
            </Col>
            <Row className={styles.forthRow}>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <h3 className={styles.header}>
                    با ثبت ایمیل از جدید ترین تخفیف ها باخبر شوید
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={10} lg={12}>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}
                    validateOnBlur={false}
                    validateOnChange={false}
                  >
                    <Form>
                      <Field
                        name="email"
                        placeholder="ایمیل شما"
                        className={`${globalFont.className} ${styles.field}`}
                      />
                      <ErrorMessage
                        name="email"
                        component={FooterErrorMessage}
                      />
                      <Button variant="danger" type="submit">
                        ثبت
                      </Button>
                    </Form>
                  </Formik>
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className={styles.lastRow}>
        <Col sm={12} md={12} lg={3} className={styles.colRowLogo}>
          <Row className={styles.rowColImage}>
            <Col sm={3} md={3} lg={3} className={styles.colImage}>
              <Image
                src="/images/footerlogo2.png"
                width={45}
                height={45}
                alt="footer_logo"
                className={styles.footerLogo}
              />
            </Col>
            <Col sm={3} md={9} lg={9} className={styles.colHeader}>
              <h1 className={styles.footerHeader}>دانلود اپلیکیشن دیجی کالا</h1>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={9} className={styles.colRowImage}>
          <Row>
            <Col sm={6} md={6} lg={3}><Link href='*' className={styles.link}><Image src='/images/googlePlayButton.svg' width={140} height={50} alt="google_play_button"/></Link></Col>
            <Col sm={6} md={6} lg={3}><Link href='*' className={styles.link}><Image src='/images/bazzarButton.svg' width={140} height={50} alt="bazzar_button"/></Link></Col>
            <Col sm={6} md={6} lg={3}><Link href='*' className={styles.link}><Image src='/images/myketButton.svg' width={140} height={50} alt="myket_buttom"/></Link></Col>
            <Col sm={6} md={6} lg={3}><Link href='*' className={styles.link}><Image src='/images/sibAppButton.svg' width={140} height={50} alt="sib_app_buttom"/></Link></Col>
          </Row>
        </Col>
      </Row>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        className={styles.toast}
      >
        <ToastHeader></ToastHeader>
        <Toast.Body>عملیات با موفقیت انجام شد</Toast.Body>
      </Toast>
    </Container>
  );
};

export default Footer;
