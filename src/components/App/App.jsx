import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, lazy } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import css from "./App.module.css";
import { Loading } from "../Loading/Loading";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("../../pages/Home/Home"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const Login = lazy(() => import("../../pages/Login/Login"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const NotFoundPage = () => import("../../pages/NotFoundPage/NotFoundPage");
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <div className={css.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
export default App;
