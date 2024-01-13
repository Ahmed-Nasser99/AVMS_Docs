import React from "react";
import { Link } from "react-router-dom";

export default function KioskTabs() {
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/kiosk" className="link-dark rounded">
          Welcome
        </Link>
      </li>
      <li>
        <Link to="/kiosk/todayInvitation" className="link-dark rounded">
          Create Today Invitation
        </Link>
      </li>
      <li>
        <Link to="/kiosk/upcomingInvitation" className="link-dark rounded">
          Create Upcoming Invitation
        </Link>
      </li>
      <li>
        <Link to="/kiosk/SearchVisits" className="link-dark rounded">
          Search Visits
        </Link>
      </li>
    </ul>
  );
}
