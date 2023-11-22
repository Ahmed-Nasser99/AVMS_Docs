import React from "react";
import DashboardCategory from "../../Tabs Category/DashboardCategory/Dashboard Category";
import HomeCategories from "../../Tabs Category/HomeCategories/Home Categories";
import { Link } from "react-router-dom";
import UsersRoles from "../../Tabs Category/Users&Roles/Users&Roles";

export default function Sidebar({ setDisplaySidebar, DisplaySidebar }) {
  return (
    <div className="flex-shrink-0 p-3 bg-white w-100 h-100 rounded sidebar">
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">AVMS</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="true"
          >
            Dashboard
          </button>
          <div className="collapse show" id="dashboard-collapse">
            <DashboardCategory />
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="false"
          >
            Home
          </button>
          <div className="collapse" id="home-collapse">
            <HomeCategories />
          </div>
        </li>

        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed fs-8"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Users & Roles management
          </button>
          <div className="collapse" id="orders-collapse">
            <UsersRoles />
          </div>
        </li>
        <li className="mb-1">
          <Link to="/report" className="btn link-dark rounded">
            Report
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/Invitation" className="btn link-dark rounded">
            Invitation
          </Link>
        </li>
      </ul>
    </div>
  );
}
