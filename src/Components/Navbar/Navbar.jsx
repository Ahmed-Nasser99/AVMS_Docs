import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import en from "../../assets/Images/Icons/en.png";
import ar from "../../assets/Images/Icons/ar.png";
import { useTranslation } from "react-i18next";
export default function Navbar({ setDisplaySidebar, DisplaySidebar }) {
  let Navigate = useNavigate();

  const { t, i18n } = useTranslation();
  let [pageLocation, setPagelocation] = useState("");
  let [showIcon, setShowIcon] = useState(true);

  return (
    <nav className="navbar bg-white position-relative fixed-top w-100">
      <div className="d-flex align-items-center justify-content-between mx-4 w-100">
        <Link className="navbar-brand" to="/">
          <img
            src="https://egydns.ddns.net:1488/Images/Icons/avms-logo02-01.ico"
            alt="AVMS"
            width="110"
            height="40"
          />
        </Link>
        <div className="searchInput position-relative w-50 d-none d-lg-block">
          <button
            className="form-control mr-sm-2 rounded-5"
            type="search"
            aria-label="Search"
            data-bs-toggle="modal"
            data-bs-target="#SearchModal"
          >
            <span className="main-color">
              <i className="fa-brands fa-searchengin"></i> {t("Search")}
            </span>
          </button>
        </div>

        <div className="d-block d-lg-none">
          <button
            className="btn btn-light"
            type="search"
            aria-label="Search"
            data-bs-toggle="modal"
            data-bs-target="#SearchModal"
          >
            <i className="fa-brands fa-searchengin"></i>
          </button>
        </div>
        <div className="d-lg-none">
          <button
            className="btn btn-light"
            type="button"
            onClick={() => {
              setDisplaySidebar(!DisplaySidebar);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className={i18n.language === "ar" ? "dropend" : "dropstart"}>
          <button
            className="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={i18n.language === "ar" ? ar : en} alt="Language Logo" />
          </button>
          <ul class="dropdown-menu">
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  i18n.changeLanguage("ar");
                  document
                    .getElementsByTagName("html")[0]
                    .setAttribute("dir", "rtl");
                }}
              >
                <img src={ar} alt="arabic_Logo" />
                <span className="mx-2 fw-medium">Arabic</span>
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  i18n.changeLanguage("en");
                  document
                    .getElementsByTagName("html")[0]
                    .setAttribute("dir", "ltr");
                }}
              >
                <img src={en} alt="english_Logo" />
                <span className="mx-2 fw-medium">English</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
