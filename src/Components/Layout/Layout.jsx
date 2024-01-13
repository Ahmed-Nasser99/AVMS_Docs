import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchingModal from "../../Modals/SearchingModal/SearchingModal";

export default function Layout() {
  return (
    <>
      <SearchingModal />
      <Navbar />
      <div className="container m-0 container-h px-0">
        <div className="row h-100 row-h">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
