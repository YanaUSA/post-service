import { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { Layout } from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const DepartmentsPage = lazy(
  () => import("./pages/departmentsPage/departmentsPage")
);
const NotFoundPage = lazy(
  () => import("./components/NotFoundPage/NotFoundPage")
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
