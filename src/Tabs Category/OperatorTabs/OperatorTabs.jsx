import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function OperatorTabs({ setDisplayScreen, DisplayScreen }) {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <button
          onClick={() => {
            setDisplayScreen("login");
          }}
          className={
            DisplayScreen === "login"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Login")}
        </button>
      </li>

      <li>
        <button
          onClick={() => {
            setDisplayScreen("sectors");
          }}
          className={
            DisplayScreen === "sectors"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("VisitType")}
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
      <li>
        <button
          onClick={() => {
            setDisplayScreen("editInformationData");
          }}
          className={
            DisplayScreen === "editInformationData"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("EditInformationData")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("cancelVisit");
          }}
          className={
            DisplayScreen === "cancelVisit"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("CancelVisit")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("blockList");
          }}
          className={
            DisplayScreen === "blockList"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("BlockList")}
        </button>
      </li>
    </ul>
  );
}
