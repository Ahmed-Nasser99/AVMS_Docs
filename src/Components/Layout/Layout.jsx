import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      <div className="row py-2">
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
