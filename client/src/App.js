import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Header from "./shared/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forget from "./pages/Forget";
import Dashboard from "./pages/Dashboard";
import LeftSidebar from "./shared/LeftSidebar";
import "./App.scss";
import AddCustomar from "./components/customar/AddCustomar";
import CustomarList from "./components/customar/CustomarList";
import "./shared/scss/rightsidebar.scss";
import Footer from "./shared/Footer";
import AddMedicine from "./components/medicine/AddMedicine";
import MedicineList from "./components/medicine/MedicineList";
import AddMedicineCate from "./components/medicine/AddMedicineCate";
import MedicineCateList from "./components/medicine/MedicineCateList";
import AddMedicineType from "./components/medicine/AddMedicineType";
import MedicineTypeList from "./components/medicine/MedicineTypeList";
import AddMedicineUnit from "./components/medicine/AddMedicineUnit";
import MedicineUnitList from "./components/medicine/MedicineUnitList";
import CustomarPaid from "./components/customar/CustomarPaid";
import CustomarCredit from "./components/customar/CustomarCredit";
import EditMedicineCate from "./components/medicine/EditMedicineCate";
import CustomCSSPage from "./components/customcode/CustomCSSPage";

const Layout = () => {
  const token = localStorage.getItem("token")
  return (

    <>
      
        
        
        { token ?  
        <>
        <Header />
        <section>
          <div className="body_section_wrapper">
            <div className="body_left_section">
              <LeftSidebar />
            </div>
  
            <div className="body_right_section">
              <section className="form_container_wrapper">
              <Outlet />
              </section>
              <footer>
                <div className="footer">
                  <div>
                    <Footer />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
        </>
        : <Login />  
      }
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Dashboard />,
      },

      // Customar section

      {
        path: "/customar/add",
        element: <AddCustomar />,
      },
      {
        path: "/customar/list",
        element: <CustomarList />,
      },
      {
        path: "/customar/paid",
        element: <CustomarPaid />,
      },
      {
        path: "/customar/credit",
        element: <CustomarCredit />,
      },

      // medicine section

      {
        path: "/medicine/add",
        element: <AddMedicine />,
      },
      {
        path: "/medicine/list",
        element: <MedicineList />,
      },
      {
        path: "/medicine/cate/add",
        element: <AddMedicineCate />,
      },
      {
        path: "/medicine/cate/list",
        element: <MedicineCateList />,
      },
      {
        path: "/medicine/edit/:id",
        element: <EditMedicineCate />,
      },
      {
        path: "/medicine/type/add",
        element: <AddMedicineType />,
      },
      {
        path: "/medicine/type/list",
        element: <MedicineTypeList />,
      },
      {
        path: "/medicine/unit/add",
        element: <AddMedicineUnit />,
      },
      {
        path: "/medicine/unit/list",
        element: <MedicineUnitList />,
      },
// Custom CSS Code Editor
      {
        path: "/customcode",
        element: <CustomCSSPage />,
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget",
    element: <Forget />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
