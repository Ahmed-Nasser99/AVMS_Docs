import React from "react";
import indexDevices from "../../../assets/Images/Home/Devices/Devices.jpeg";

export default function Devices() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Devices</h1>
      <img src={indexDevices} alt="Main Dashboard" className="rounded w-100" />
    </div>
  );
}
