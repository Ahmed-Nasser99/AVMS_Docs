import React from "react";
import indexUsers from "../../../assets/Images/Users & Roles management/Users/UsersList.jpeg";
import AddUsers from "../../../assets/Images/Users & Roles management/Users/AddUser.jpeg";

export default function Users() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Users</h1>
      <img src={indexUsers} alt="Main Dashboard" className="rounded" />
      <h1 className="text-muted">Add Users</h1>
      <img src={AddUsers} alt="Main Dashboard" className="rounded" />
    </div>
  );
}
