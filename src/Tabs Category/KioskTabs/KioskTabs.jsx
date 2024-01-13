import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function KioskTabs() {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/kiosk" className="link-dark rounded">
          {t("Welcome")}
        </Link>
      </li>
      <li>
        <Link to="/kiosk/todayInvitation" className="link-dark rounded">
          {t("CreateTodayInvitation")}
        </Link>
      </li>
      <li>
        <Link to="/kiosk/upcomingInvitation" className="link-dark rounded">
          {t("CreateUpcomingInvitation")}
        </Link>
      </li>
      <li>
        <Link to="/kiosk/SearchVisits" className="link-dark rounded">
          {t("SearchVisits")}
        </Link>
      </li>
    </ul>
  );
}
