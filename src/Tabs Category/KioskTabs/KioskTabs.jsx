import React from "react";
import { Link } from "react-router-dom";

export default function KioskTabs() {
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/home" className="link-dark rounded">
          Welcome
        </Link>
      </li>

      <li>
        <Link to="/home" className="link-dark rounded">
          Visit Type
        </Link>
      </li>
      <li>
        <Link to="/home" className="link-dark rounded">
          Create Today Invitation
        </Link>
      </li>
      <li>
        <Link to="/home" className="link-dark rounded">
          Create Upcoming Invitation
        </Link>
      </li>
      <li>
        <Link to="/home" className="link-dark rounded">
          Search Visits
        </Link>
      </li>
    </ul>
  );
}
