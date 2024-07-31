import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="d-flex">
        {/* Side Bar  */}
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};
export default DashboardLayout;
