import React from "react";
import { Link } from "react-router-dom";

export default function UsersRoles() {
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <Link to="/Users&RolesManagement/users" className="link-dark rounded">
          Users
        </Link>
      </li>
      <li>
        <Link to="/Users&RolesManagement/roles" className="link-dark rounded">
          Roles
        </Link>
      </li>
    </ul>
  );
}
