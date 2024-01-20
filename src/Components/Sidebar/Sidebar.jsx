import React from "react";
import DashboardCategory from "../../Tabs Category/AdminTabs/DashboardCategory/Dashboard Category";
import HomeCategories from "../../Tabs Category/AdminTabs/HomeCategories/Home Categories";
import { Link } from "react-router-dom";
import UsersRoles from "../../Tabs Category/AdminTabs/Users&Roles/Users&Roles";
import KioskTabs from "../../Tabs Category/KioskTabs/KioskTabs";
import OperatorTabs from "../../Tabs Category/OperatorTabs/OperatorTabs";
import { useTranslation } from "react-i18next";

export default function Sidebar({
  setDisplaySidebar,
  DisplaySidebar,
  setDisplayScreen,
}) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex-shrink-0 p-3 bg-white w-100  sidebar overflow-auto">
      <button
        onClick={() => {
          setDisplayScreen("welcomePage");
        }}
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none "
      ></button>
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
                <button
                  onClick={() => {
                    setDisplayScreen("welcomePage");
                  }}
                  className="link-dark rounded"
                >
                  {t("Welcome")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("");
                  }}
                  className="link-dark rounded"
                >
                  {t("AboutTheSoftware")}
                </button>
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
                <button
                  onClick={() => {
                    setDisplayScreen("userRegistration");
                  }}
                  className="link-dark rounded"
                >
                  {t("UserRegistration")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("loginProcess");
                  }}
                  className="link-dark rounded"
                >
                  {t("LoginProcess")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("dashboardOverview");
                  }}
                  className="link-dark rounded"
                >
                  {t("DashboardOverview")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("navigatingTheSoftware");
                  }}
                  className="link-dark rounded"
                >
                  {t("NavigatingTheSoftware")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("userRolesAndPermissions");
                  }}
                  className="link-dark rounded"
                >
                  {t("UserRolesAndPermissions")}
                </button>
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
                <button
                  onClick={() => {
                    setDisplayScreen("addingANewVisitor");
                  }}
                  className="link-dark rounded"
                >
                  {t("AddingNewVisitor")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("checkInProcess");
                  }}
                  className="link-dark rounded"
                >
                  {t("CheckInProcess")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("checkOutProcess");
                  }}
                  className="link-dark rounded"
                >
                  {t("CheckOutProcess")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplayScreen("blockVisitor");
                  }}
                  className="link-dark rounded"
                >
                  {t("BlockVisitor")}
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
                    setDisplayScreen("visitorQrPrinting");
                  }}
                  className="link-dark rounded"
                >
                  {t("VisitorQrPrinting")}
                </button>
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
            <HomeCategories setDisplayScreen={setDisplayScreen} />
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
          <KioskTabs setDisplayScreen={setDisplayScreen} />
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
          <OperatorTabs setDisplayScreen={setDisplayScreen} />
        </div>
      </ul>
    </div>
  );
}
