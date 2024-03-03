import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
    </form>
  );
};
