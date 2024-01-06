import React from "react";
import { Link } from "react-router-dom";

export default function HomeCategories() {
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/admin/home" className="link-dark rounded">
          Overview
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Sectors" className="link-dark rounded">
          Sectors
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Buildings" className="link-dark rounded">
          Buildings
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Floors" className="link-dark rounded">
          Floors
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Units" className="link-dark rounded">
          Units
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Gates" className="link-dark rounded">
          Gates
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Devices" className="link-dark rounded">
          Devices
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Companies" className="link-dark rounded">
          Companies
        </Link>
      </li>
      <li>
        <Link to="/admin/home/DeviceTypes" className="link-dark rounded">
          Device Types
        </Link>
      </li>
      <li>
        <Link to="/admin/home/Blacklist" className="link-dark rounded">
          Blacklist
        </Link>
      </li>
    </ul>
  );
}
