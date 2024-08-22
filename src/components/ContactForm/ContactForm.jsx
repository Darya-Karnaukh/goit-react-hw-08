import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContactThunk } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();
  const onSubmit = (data, actions) => {
    dispatch(addContactThunk(data));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be more than 3 chars!")
      .max(20, "Name must be less than 20 chars"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^[\d-+() ]+$/, "Invalid phone number format"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.formWrapper}>
        <label className={s.label}>
          <span>Name</span>
          <Field className={s.field} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <Field className={s.field} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
