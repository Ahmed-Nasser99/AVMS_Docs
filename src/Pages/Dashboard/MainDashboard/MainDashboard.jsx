import React from "react";
import mainDashboard from "../../../assets/Images/Admin_images/Dashboard/MainDashboard.jpeg";
import Image from "../../../Components/Image/Image";
export default function MainDashboard() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-success">MainDashboard</h1>
      <Image src={mainDashboard} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
