import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import en from "../../assets/Images/Icons/en.png";
import ar from "../../assets/Images/Icons/ar.png";
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
      <div className="d-flex align-items-center justify-content-between mx-4  w-100">
        <Link className="navbar-brand" href="/">
          <img
            src="https://egydns.ddns.net:1488/Images/Icons/avms-logo02-01.ico"
            alt="AVMS"
            width="110"
            height="40"
          />
        </Link>
        <div className="searchInput position-relative w-50">
          <span className="search_icon">
            <i class="fa-brands fa-searchengin "></i> Search
          </span>
          <input
            class="form-control mr-sm-2 rounded-5"
            type="search"
            aria-label="Search"
          />
        </div>
        <div class={i18n.language === "ar" ? "dropend" : "dropstart"}>
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={i18n.language === "ar" ? ar : en} alt="arabic_Logo" />
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
