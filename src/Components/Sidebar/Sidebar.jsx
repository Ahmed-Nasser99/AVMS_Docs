import React from "react";
import DashboardCategory from "../../Tabs Category/DashboardCategory/Dashboard Category";
import HomeCategories from "../../Tabs Category/HomeCategories/Home Categories";
import { Link } from "react-router-dom";

export default function Sidebar() {
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
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="/Users&RolesManagement/users"
                  className="link-dark rounded"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/Users&RolesManagement/roles"
                  className="link-dark rounded"
                >
                  Roles
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
