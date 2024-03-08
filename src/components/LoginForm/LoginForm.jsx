import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Form, Formik, Field, ErrorMessage } from "formik";
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
  email: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
  password: Yup.string()
    .min(7, "Too short!")
    .max(50, "Too long!")
    .required("This is a required field"),
});
const initialValues = {
  email: "",
  password: "",
};
export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.formGroup}>
          <lable className={css.label} htmlFor={emailId}>
            Email
          </lable>
          <Field
            className={css.inputForm}
            id={emailId}
            type="email"
            name="email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <lable className={css.label} htmlFor={passwordId}>
            Password
          </lable>
          <Field
            className={css.inputForm}
            id={passwordId}
            type="password"
            name="password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <StyledButton type="submit">LogIn</StyledButton>
      </Form>
    </Formik>
  );
};
