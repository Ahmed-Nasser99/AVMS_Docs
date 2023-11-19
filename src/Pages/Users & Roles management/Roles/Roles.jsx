import React from "react";
import indexRoles from "../../../assets/Images/Users & Roles management/Roles/MainRoles.jpeg";
import MangePermissions from "../../../assets/Images/Users & Roles management/Roles/MangePermissions.jpeg";

export default function Roles() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Roles</h1>
      <img src={indexRoles} alt="Main Dashboard" className="rounded w-100" />
      <h1 className="text-muted">Mange Permissions</h1>
      <img
        src={MangePermissions}
        alt="Main Dashboard"
        className="rounded w-100"
      />
    </div>
  );
}
