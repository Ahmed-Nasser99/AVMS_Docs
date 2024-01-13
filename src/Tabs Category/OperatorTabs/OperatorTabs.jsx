import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function OperatorTabs() {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("Login")}
        </Link>
      </li>

      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("VisitType")}
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("CreateTodayInvitation")}
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("CreateUpcomingInvitation")}
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("SearchVisits")}
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("EditInformationData")}
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("CancelVisit")}
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          {t("BlockList")}
        </Link>
      </li>
    </ul>
  );
}
