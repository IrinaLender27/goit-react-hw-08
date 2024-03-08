import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import PrivateRoute from "../PrivateRoute";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import css from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
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
        </Route>
      </Routes>
    </div>
  );
};
export default App;
