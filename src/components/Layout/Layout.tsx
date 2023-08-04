import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import Footer from "../Footer/Footer";

export const Layout = () => {
  return (
    <div>
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
