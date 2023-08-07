import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
};
