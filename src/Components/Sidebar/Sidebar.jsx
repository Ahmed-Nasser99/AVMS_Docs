import React from "react";
import DashboardCategory from "../../Tabs Category/DashboardCategory/Dashboard Category";
import HomeCategories from "../../Tabs Category/HomeCategories/Home Categories";

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
            aria-expanded="false"
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
            aria-expanded="true"
          >
            Home
          </button>
          <div className="collapse" id="home-collapse">
            <HomeCategories />
          </div>
        </li>

        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Orders
          </button>
          <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="#" className="link-dark rounded">
                  New
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Processed
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Shipped
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Returned
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
