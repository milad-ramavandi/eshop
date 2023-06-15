import Card from "@/components/Card";
import { getMethodFetch } from "@/repository/FetchRepository";
import React from "react";
import styles from "./style.module.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import { Helmet } from "react-helmet";

const KharideSareMah = (props) => {
  return (
    <>
      <Helmet>
        <title>خرید سر ماه</title>
        <link rel="shortcut icon" href="/favicons/favicon_sareMah/favicon.ico" />
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
  const data = await getMethodFetch("products/KharideSareMah").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
}
export default KharideSareMah;
