import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import { useId } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";

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
      <Form>
        <div>
          <lable htmlFor={emailId}>Email</lable>
          <Field id={emailId} type="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <lable htmlFor={passwordId}>Password</lable>
          <Field id={passwordId} type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
