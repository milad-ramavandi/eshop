import React from "react";
import styles from "./signup.module.scss";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik, getIn } from "formik";
import * as yup from "yup";
import LoginErrorMessage from "@/components/LoginErrorMessage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { postMethodAxios } from "@/repository/AxiosRepository";
import { globalFont } from "./_app";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { Helmet } from "react-helmet";

const getStyles = (errors, fieldName) => {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid #cf5252",
    };
  }
};
const CustomInput = ({ field, form: { errors }, ...props }) => {
  return (
    <div>
      <input
        {...field}
        {...props}
        type={`${field.name}`}
        style={getStyles(errors, field.name)}
      />
      <ErrorMessage name={field.name} component={LoginErrorMessage} />
    </div>
  );
};

const signup = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = yup.object({
    username: yup.string().required("لطفا این قسمت را خالی نگذارید"),
    password: yup.string().required("لطفا این قسمت را خالی نگذارید"),
  });
  const submitHandler = (values) => {
    postMethodAxios("/users/register", values).then(() => alert("hello"));
  };
  return (
    <>
      <Helmet>
        <title>ثبت نام در دیجی کالا</title>
        <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
      </Helmet>
      <div className={styles.signup}>
        <div>
          <Image
            src="/images/logo.svg"
            width={200}
            height={40}
            alt="logo"
            className={styles.img}
          />
        </div>
        <h2 className={styles.header}>ثبت نام</h2>
        <p className={styles.para}>سلام!</p>
        <p className={styles.para}>
          لطفا شماره موبایل و گذرواژه خود را به ترتیب وارد کنید
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form>
            <Field
              type="tel"
              name="username"
              className={`${styles.input} ${globalFont.className}`}
              component={CustomInput}
              placeholder="شماره موبایل"
            />

            <Field
              type="password"
              name="password"
              className={`${styles.input} ${globalFont.className}`}
              component={CustomInput}
              placeholder="گذرواژه"
            />

            <Button variant="danger" className={styles.Button} type="submit">
              ورود
            </Button>
          </Form>
        </Formik>
        <div>
          <Link href="/" className={styles.link}>
            <FiArrowRight /> بازگشت به صفحه ی اصلی
          </Link>
        </div>
      </div>
    </>
  );
};

export default signup;
