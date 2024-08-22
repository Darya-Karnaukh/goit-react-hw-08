/* eslint-disable react/no-unescaped-entities */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "../LoginForm/LoginForm.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("This field is required"),
  });

  const onSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.wrapper}>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <div className={s.group}>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={s.control}
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>

          <div className={s.group}>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={s.control}
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>

          <button type="submit" className={s.btn}>
            Login
          </button>
          <p>
            You don't have account?
            <Link to="/register">Sign up </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
