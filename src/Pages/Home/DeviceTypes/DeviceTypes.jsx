import React from "react";
import indexDeviceType from "../../../assets/Images/Home/DeviceTypes/DeviceTypes.jpeg";

export default function DeviceTypes() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main DeviceType</h1>
      <img src={indexDeviceType} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
