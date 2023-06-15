import Card from "@/components/Card";
import React from "react";
import styles from "./style.module.scss";
import { getMethodFetch } from "@/repository/FetchRepository";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const PishnahadeRoozeMobile = (props) => {
  return (
    <>
      <Helmet>
        <title>پیشنهاد روز موبایل</title>
        <link
          rel="shortcut icon"
          href="/favicons/favicon_pishnahadRoozMobile/favicon.ico"
        />
      </Helmet>
      <Container>
        <Row className={styles.mainContainer}>
          {props.data.map((item) => {
            return (
              <Col
                sm={6}
                md={4}
                lg={3}
                key={item.id}
                className={styles.outerCardContainer}
              >
                <a href={`/products/${item.id}`} target="_blank">
                  <Card data={item} />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export async function getServerSideProps(params) {
  const data = await getMethodFetch("products/PishnahadeRoozeMobile").then(
    (res) => res.json()
  );
  return {
    props: {
      data,
    },
  };
}
export default PishnahadeRoozeMobile;
