import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function KioskTabs({ setDisplayScreen, DisplayScreen }) {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <button
          onClick={() => {
            setDisplayScreen("welcome");
          }}
          className={
            DisplayScreen === "welcome"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Welcome")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("createTodayInvitation");
          }}
          className={
            DisplayScreen === "createTodayInvitation"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("CreateTodayInvitation")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("createUpcomingVisit");
          }}
          className={
            DisplayScreen === "createUpcomingVisit"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("CreateUpcomingInvitation")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("searchVisits");
          }}
          className={
            DisplayScreen === "searchVisits"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("SearchVisits")}
        </button>
      </li>
    </ul>
  );
}
