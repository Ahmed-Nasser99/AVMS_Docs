import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container m-0">
      <div className="row p-4">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
