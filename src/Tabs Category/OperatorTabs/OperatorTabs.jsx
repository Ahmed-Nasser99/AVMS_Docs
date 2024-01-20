import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function OperatorTabs({ setDisplayScreen }) {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <button
          onClick={() => {
            setDisplayScreen("login");
          }}
          className="link-dark rounded"
        >
          {t("Login")}
        </button>
      </li>

      <li>
        <button
          onClick={() => {
            setDisplayScreen("sectors");
          }}
          className="link-dark rounded"
        >
          {t("VisitType")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("createTodayInvitation");
          }}
          className="link-dark rounded"
        >
          {t("CreateTodayInvitation")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("createUpcomingVisit");
          }}
          className="link-dark rounded"
        >
          {t("CreateUpcomingInvitation")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("searchVisits");
          }}
          className="link-dark rounded"
        >
          {t("SearchVisits")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("editInformationData");
          }}
          className="link-dark rounded"
        >
          {t("EditInformationData")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("cancelVisit");
          }}
          className="link-dark rounded"
        >
          {t("CancelVisit")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("blockList");
          }}
          className="link-dark rounded"
        >
          {t("BlockList")}
        </button>
      </li>
    </ul>
  );
}
