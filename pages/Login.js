import React, { useState } from "react";
import styles from "./login.module.scss";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik, getIn } from "formik";
import * as yup from "yup";
import LoginErrorMessage from "@/components/LoginErrorMessage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { postMethodAxios } from "@/repository/AxiosRepository";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// import { setToken } from "@/redux/features/UserSlice";
import { globalFont } from "./_app";
import { FiArrowRight } from "react-icons/fi";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";

// const EMAIL_REGEX =
//   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// const PHONE_REGEX = /^(\+98|0)?\d{10}$/;

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

const Login = () => {
  const [showItem, setShowItem] = useState(false);
  const router = useRouter();
  // const dispatch = useDispatch();
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = yup.object({
    // username: yup.string().test({
    //   name: "ValidateEmailOrPhpone",
    //   test(value, ctx) {
    //     if (!value) {
    //       return ctx.createError({ message: "لطفا این قسمت را خالی نگذارید" });
    //     }
    //     const isEmail = EMAIL_REGEX.test(value);
    //     const isPhone = PHONE_REGEX.test(value);
    //     if (isPhone || isEmail) return true;
    //     return ctx.createError({
    //       message: "شماره موبایل یا ایمیل نادرست است.",
    //     });
    //   },
    // }),
    username: yup.string().required("لطفا این قسمت را خالی نگذارید"),
    password: yup.string().required("لطفا این قسمت را خالی نگذارید"),
  });
  const submitHandler = (values) => {
    postMethodAxios("users/login", values).then((res) => {
      if (res.data.hasOwnProperty("token")) {
        // dispatch(setToken(res.data.token));
        Cookies.set("token", `${res.data.token}`, { expires: 2 });
        router.push("/");
      } else {
        setShowItem(true);
      }
    });
  };
  const clickHideItemHandler = () => {
    setShowItem(false);
  };
  const clickNavigateHandler = () => {
    router.push("/signup");
  };
  return (
    <>
      <Helmet>
        <title>ورود به دیجی کالا</title>
        <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
      </Helmet>
      <div className={styles.login}>
        <div className={styles.topLogin}>
          <div className={styles.iconContainer}>
            {showItem ? (
              <FiArrowRight
                className={styles.icon}
                onClick={clickHideItemHandler}
              />
            ) : null}
          </div>
          <div className={styles.imgContainer}>
            <Image
              src="/images/logo.svg"
              width={200}
              height={40}
              alt="logo"
              className={styles.img}
            />
          </div>
        </div>
        <h2 className={styles.header}>{!showItem ? "ورود" : null}</h2>
        <p className={styles.para}>{!showItem ? "سلام!" : null}</p>
        <p className={styles.para}>
          {!showItem
            ? "لطفا شماره موبایل و گذرواژه خود را به ترتیب وارد کنید"
            : `شماره موبایل یا گذرواژه اشتباه است. لطفا در صورتی که تاکنون اقدام به ساخت حساب کاربری نکرده اید روی دکمه ی زیر کلیک کنید.`}
        </p>

        {!showItem ? (
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
        ) : (
          <Button
            variant="danger"
            className={styles.Button}
            type="submit"
            onClick={clickNavigateHandler}
          >
            ادامه
          </Button>
        )}
      </div>
    </>
  );
};

export default Login;
