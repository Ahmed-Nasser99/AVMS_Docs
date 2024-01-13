import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomeCategories() {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/admin/home/Sectors" className="link-dark rounded">
          {t("Sectors")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Buildings" className="link-dark rounded">
          {t("Buildings")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Floors" className="link-dark rounded">
          {t("Floors")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Units" className="link-dark rounded">
          {t("Units")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Gates" className="link-dark rounded">
          {t("Gates")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Devices" className="link-dark rounded">
          {t("Devices")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Companies" className="link-dark rounded">
          {t("Companies")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/DeviceTypes" className="link-dark rounded">
          {t("DeviceTypes")}
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Blacklist" className="link-dark rounded">
          {t("Blacklist")}
        </Link>
      </li>
    </ul>
  );
}
