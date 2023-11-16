import React from "react";
import indexCompany from "../../../assets/Images/Home/Companies/Companies.jpeg";

export default function Companies() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Company</h1>
      <img src={indexCompany} alt="Main Dashboard" className="rounded w-100" />
    </div>
  );
}
