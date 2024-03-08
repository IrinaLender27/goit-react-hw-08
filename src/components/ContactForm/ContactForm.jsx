import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  width: "150px",
  margin: "0 auto",
  display: "block",
  cursor: "pointer",
  background: "#4f0495",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  color: "white",
  "&:hover": {
    backgroundColor: "#764b9f",
    borderColor: "white",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#764b9f",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
  number: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
});
const initialValues = {
  name: "",
  number: "",
};
export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.inputForm}
            id={nameId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor={numberId}>
            Numder
          </label>
          <Field
            className={css.inputForm}
            id={numberId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <StyledButton type="submit">Add contact</StyledButton>
      </Form>
    </Formik>
  );
};
