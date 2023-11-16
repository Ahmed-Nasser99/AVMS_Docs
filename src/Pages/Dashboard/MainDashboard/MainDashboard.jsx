import React from "react";
import mainDashboard from "../../../assets/Images/Dashboard/MainDashboard.jpeg";
export default function MainDashboard() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-success">MainDashboard</h1>
      <img src={mainDashboard} alt="Main Dashboard" className="rounded w-100" />
    </div>
  );
}
