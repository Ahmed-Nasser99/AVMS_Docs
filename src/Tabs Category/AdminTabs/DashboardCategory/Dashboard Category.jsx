import React from "react";
import { Link } from "react-router-dom";

export default function DashboardCategory() {
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/" className="link-dark rounded">
          Overview
        </Link>
      </li>
      <li>
        <Link to="/admin/customDashboard" className="link-dark rounded">
          Custom Dashboard
        </Link>
      </li>
    </ul>
  );
}
