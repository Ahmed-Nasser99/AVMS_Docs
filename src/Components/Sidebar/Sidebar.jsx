import React from "react";
import DashboardCategory from "../../Tabs Category/AdminTabs/DashboardCategory/Dashboard Category";
import HomeCategories from "../../Tabs Category/AdminTabs/HomeCategories/Home Categories";
import { Link } from "react-router-dom";
import UsersRoles from "../../Tabs Category/AdminTabs/Users&Roles/Users&Roles";
import KioskTabs from "../../Tabs Category/KioskTabs/KioskTabs";
import OperatorTabs from "../../Tabs Category/OperatorTabs/OperatorTabs";
import { useTranslation } from "react-i18next";

export default function Sidebar({ setDisplaySidebar, DisplaySidebar }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex-shrink-0 p-3 bg-white w-100  sidebar overflow-auto">
      <Link
        to="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none "
      ></Link>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded"
            data-bs-toggle="collapse"
            data-bs-target="#introduction-collapse"
            aria-expanded="true"
          >
            {t("Introduction")}
          </button>
          <div className="collapse show" id="introduction-collapse" style={{}}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("Welcome")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("AboutTheSoftware")}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#getting-started-collapse"
            aria-expanded="false"
          >
            {t("GettingStarted")}
          </button>
          <div className="collapse" id="getting-started-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("UserRegistration")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("LoginProcess")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("DashboardOverview")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("NavigatingTheSoftware")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("UserRolesAndPermissions")}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#managing-visitors-collapse"
            aria-expanded="false"
          >
            {t("ManagingVisitors")}
          </button>
          <div className="collapse" id="managing-visitors-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("AddingNewVisitor")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("CheckInProcess")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("CheckOutProcess")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("BlockVisitor")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("CancelVisit")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("VisitorQrPrinting")}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#managing-hosts-collapse"
            aria-expanded="false"
          >
            {t("ManagingHosts")}
          </button>
          <div className="collapse" id="managing-hosts-collapse">
            <HomeCategories />
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#managing-appointments-collapse"
            aria-expanded="false"
          >
            {t("ManagingHosts")}
          </button>
          <div className="collapse" id="managing-appointments-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("ManagingAppointments")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("SchedulingAppointments")}
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  {t("SendingAppointmentNotifications")}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#show-Kiosk-collapse"
            aria-expanded="false"
          >
            {t("kiosk")}
          </button>
        </li>

        <div className="collapse ps-2" id="show-Kiosk-collapse">
          <KioskTabs />
        </div>

        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#show-Operator-collapse"
            aria-expanded="false"
          >
            {t("operator")}
          </button>
        </li>

        <div className="collapse ps-2" id="show-Operator-collapse">
          <OperatorTabs />
        </div>
      </ul>
    </div>
  );
}
