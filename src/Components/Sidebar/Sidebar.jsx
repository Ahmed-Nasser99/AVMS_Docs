import React from "react";
import DashboardCategory from "../../Tabs Category/AdminTabs/DashboardCategory/Dashboard Category";
import HomeCategories from "../../Tabs Category/AdminTabs/HomeCategories/Home Categories";
import { Link } from "react-router-dom";
import UsersRoles from "../../Tabs Category/AdminTabs/Users&Roles/Users&Roles";
import KioskTabs from "../../Tabs Category/KioskTabs/KioskTabs";
import OperatorTabs from "../../Tabs Category/OperatorTabs/OperatorTabs";

export default function Sidebar({ setDisplaySidebar, DisplaySidebar }) {
  return (
    // <div className="flex-shrink-0 p-3 bg-white w-100 rounded sidebar overflow-auto">
    //   <Link
    //     href="/"
    //     className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
    //   >
    //     <span className="fs-5 fw-semibold">AVMS</span>
    //   </Link>
    //   <ul className="list-unstyled ps-0 m-0">
    //     <li className="mb-1">
    //       <button
    //         className="btn btn-toggle align-items-center rounded collapsed"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#show-dashboard-collapse"
    //         aria-expanded="false"
    //       >
    //         Admin Panel
    //       </button>
    //     </li>
    //   </ul>
    //   <div className="collapse ps-2" id="show-dashboard-collapse">
    //     <ul className="list-unstyled ps-0">
    //       <li className="mb-1">
    //         <button
    //           className="btn btn-toggle align-items-center rounded collapsed"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#dashboard-collapse"
    //           aria-expanded="false"
    //         >
    //           Dashboard
    //         </button>
    //         <div className="collapse" id="dashboard-collapse">
    //           <DashboardCategory />
    //         </div>
    //       </li>
    //       <li className="mb-1">
    //         <button
    //           className="btn btn-toggle align-items-center rounded collapsed"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#home-collapse"
    //           aria-expanded="false"
    //         >
    //           Home
    //         </button>
    //         <div className="collapse" id="home-collapse">
    //           <HomeCategories />
    //         </div>
    //       </li>

    //       <li className="mb-1">
    //         <button
    //           className="btn btn-toggle align-items-center rounded collapsed fs-8"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#orders-collapse"
    //           aria-expanded="false"
    //         >
    //           Users & Roles management
    //         </button>
    //         <div className="collapse" id="orders-collapse">
    //           <UsersRoles />
    //         </div>
    //       </li>
    //       <li className="mb-1">
    //         <Link to="/admin/report" className="btn link-dark rounded">
    //           Report
    //         </Link>
    //       </li>
    //       <li className="mb-1">
    //         <Link to="/admin/Invitation" className="btn link-dark rounded">
    //           Invitation
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <ul className="list-unstyled ps-0 m-0">
    //     <li className="mb-1">
    //       <button
    //         className="btn btn-toggle align-items-center rounded collapsed"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#show-Kiosk-collapse"
    //         aria-expanded="false"
    //       >
    //         Kiosk
    //       </button>
    //     </li>
    //   </ul>
    //   <div className="collapse ps-2" id="show-Kiosk-collapse">
    //     <KioskTabs />
    //   </div>
    //   <ul className="list-unstyled ps-0 m-0">
    //     <li className="mb-1">
    //       <button
    //         className="btn btn-toggle align-items-center rounded collapsed"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#show-Operator-collapse"
    //         aria-expanded="false"
    //       >
    //         Operator
    //       </button>
    //     </li>
    //   </ul>
    //   <div className="collapse ps-2" id="show-Operator-collapse">
    //     <OperatorTabs />
    //   </div>
    // </div>

    <div className="flex-shrink-0 p-3 bg-white w-100 rounded sidebar overflow-auto">
      <Link
        to="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5 fw-semibold">AVMS</span>
      </Link>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded"
            data-bs-toggle="collapse"
            data-bs-target="#introduction-collapse"
            aria-expanded="true"
          >
            Introduction
          </button>
          <div className="collapse show" id="introduction-collapse" style={{}}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  Welcome
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  About the software
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Target audience
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  System requirements
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Installation instructions
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
            Getting Started
          </button>
          <div className="collapse" id="getting-started-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  User registration
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Login process
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Dashboard overview
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Navigating the software
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  User roles and permissions
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
            Managing Visitors
          </button>
          <div className="collapse" id="managing-visitors-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  Adding a new visitor
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Pre-registration process
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Check-in process
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Check-out process
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Visitor badge printing
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
            Managing Hosts
          </button>
          <div className="collapse" id="managing-hosts-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  Adding and managing host profiles
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Assigning hosts to visitors
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Host notifications and approvals
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#managing-appointments-collapse"
            aria-expanded="false"
          >
            Managing Appointments
          </button>
          <div className="collapse" id="managing-appointments-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  Scheduling appointments
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Sending appointment notifications
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Managing appointments
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
            Kiosk
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
            Operator
          </button>
        </li>

        <div className="collapse ps-2" id="show-Operator-collapse">
          <OperatorTabs />
        </div>
      </ul>
    </div>
  );
}
