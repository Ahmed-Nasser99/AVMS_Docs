import React from "react";
import { Link } from "react-router-dom";

export default function OperatorTabs() {
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/admin" className="link-dark rounded">
          Login
        </Link>
      </li>

      <li>
        <Link to="/admin" className="link-dark rounded">
          Visit Type
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          Create Today Invitation
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          Create Upcoming Invitation
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          Search Visits
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          Edit Scanner Data
        </Link>
      </li>
      <li>
        <Link to="/admin" className="link-dark rounded">
          Block List
        </Link>
      </li>
    </ul>
  );
}
