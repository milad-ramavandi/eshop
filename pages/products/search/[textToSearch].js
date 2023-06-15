import Card from "@/components/Card";
import { getMethodFetch } from "@/repository/FetchRepository";
import React from "react";
import styles from "../style.module.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const textToSearch = (props) => {
  return (
    <>
      <Helmet>
        <title>فروشگاه اینترنتی دیجی کالا</title>
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
  const data = await getMethodFetch(
    `products/search/${context.params.textToSearch}`
  ).then((res) => res.json());

  if (data.length === 0) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        data,
      },
    };
  }
}
export default textToSearch;
