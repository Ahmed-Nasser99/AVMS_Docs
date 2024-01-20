import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchingModal from "../../Modals/SearchingModal/SearchingModal";
import MainDocs from "../../Helpers/MainDocs";

export default function Layout() {
  let [DisplayScreen, setDisplayScreen] = useState("welcomePage");
  return (
    <>
      <SearchingModal />
      <Navbar />
      <div className="container m-0 container-h w-100 max-width-100">
        <div className="row h-100 row-h">
          <div className="col-md-3">
            <Sidebar setDisplayScreen={setDisplayScreen} />
          </div>
          <div className="col-md-9">
            <MainDocs JsonKey={DisplayScreen} />
          </div>
        </div>
      </div>
    </>
  );
}
