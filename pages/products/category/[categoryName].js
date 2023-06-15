import { getMethodFetch } from "@/repository/FetchRepository";
import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "@/components/Card";
import styles from "../style.module.scss";
import { Helmet } from "react-helmet";
const categoryName = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.categoryData.title}</title>
        <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
      </Helmet>
      <Container>
        <Row className={styles.mainContainer}>
          {props.categoryData.products.map((item) => {
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
  const categoryData = await getMethodFetch(
    `products/category/${context.params.categoryName}`
  ).then((res) => res.json());
  return {
    props: {
      categoryData,
    },
  };
}
export default categoryName;
