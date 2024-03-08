import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <div className={css.container}>
      <div className={css.mainContent}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};
