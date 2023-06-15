import { getMethodAxios } from "@/repository/AxiosRepository";
import React from "react";
import styles from "./style.module.scss";
import Card from "@/components/Card";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const index = (props) => {
  return (
    <>
      <Helmet>
        <title>فهرست محصولات</title>
        <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
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
export async function getServerSideProps(context) {
  const data = await getMethodAxios(`products`).then((res) => res.data);
  return {
    props: {
      data,
    },
  };
}
export default index;
