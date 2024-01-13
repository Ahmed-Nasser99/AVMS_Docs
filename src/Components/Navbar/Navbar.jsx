import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/avms logo02-01.png";
import { useTranslation } from "react-i18next";
export default function Navbar({ setDisplaySidebar, DisplaySidebar }) {
  let Navigate = useNavigate();

  const { t, i18n } = useTranslation();
  let [pageLocation, setPagelocation] = useState("");
  useEffect(() => {
    setPagelocation(window.location.hash);
  }, []);

  return (
    <nav className="navbar bg-white position-relative fixed-top w-100 ">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mx-3 w-100">
          <Link className="navbar-brand" href="/">
            <img
              src="https://egydns.ddns.net:1488/Images/Icons/avms-logo02-01.ico"
              alt="AVMS"
              width="110"
              height="40"
            />
          </Link>
          <div className="select d-flex align-items-center gap-3">
            {i18n.language == "ar" ? (
              <button
                className="btn btn-outline-info"
                onClick={() => {
                  i18n.changeLanguage("en");
                  document
                    .getElementsByTagName("html")[0]
                    .setAttribute("dir", "ltr");
                }}
              >
                English
                <i className="fa-solid fa-earth-americas mx-2"></i>
              </button>
            ) : (
              <button
                className="btn btn-outline-info"
                onClick={() => {
                  i18n.changeLanguage("ar");
                  document
                    .getElementsByTagName("html")[0]
                    .setAttribute("dir", "rtl");
                }}
              >
                عربي
                <i className="fa-solid fa-earth-americas mx-2"></i>
              </button>
            )}
            {/* <button
            className="btn btn-outline-info"
            onClick={() => {
              toggleFullScreen();
            }}
          >
            {t("signOut")}
          </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
