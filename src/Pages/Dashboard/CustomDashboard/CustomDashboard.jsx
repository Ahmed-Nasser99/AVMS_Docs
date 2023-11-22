import React from "react";
import customDashboard from "../../../assets/Images/Dashboard/CustomDashboard.jpeg";
import Image from "../../../Components/Image/Image";

export default function CustomDashboard() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-danger">CustomDashboard</h1>
      <Image
        src={customDashboard}
        alt={"Main Dashboard"}
        className={"rounded"}
      />
    </div>
  );
}
