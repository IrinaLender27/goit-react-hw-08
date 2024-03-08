import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";
export default function RegisterPage() {
  return (
    <div className={css.registration}>
      <p className={css.signUp}>SignUp </p>
      <RegisterForm />
    </div>
  );
}
