import { LoginForm } from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";
export default function Login() {
  return (
    <div className={css.logIn}>
      <p className={css.logTittle}>LogIn </p>
      <LoginForm />
    </div>
  );
}
