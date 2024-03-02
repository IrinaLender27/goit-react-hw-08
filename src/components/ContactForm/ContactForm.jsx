import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/operations";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
  phone: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
});
const initialValues = {
  name: "",
  phone: "",
};
export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ id: Date.now(), ...values }));
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.formGroup}>
          <lable htmlFor={nameId}>Name</lable>
          <Field
            className={css.inputForm}
            id={nameId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <lable htmlFor={numberId}>Number</lable>
          <Field
            className={css.inputForm}
            id={numberId}
            type="tel"
            name="phone"
          />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
