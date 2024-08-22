import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "../RegisterForm/RegisterForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("This field is required"),
  });

  const onSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <div className={s.group}>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              className={s.control}
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>

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
            Register
          </button>
          <p>
            You already have account?
            <Link to="/login">Sign in </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
