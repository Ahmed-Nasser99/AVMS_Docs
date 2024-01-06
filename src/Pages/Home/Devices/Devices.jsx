import React from "react";
import indexDevices from "../../../assets/Images/Admin_images/Home/Devices/Devices.jpeg";
import Image from "../../../Components/Image/Image";

export default function Devices() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Devices</h1>
      <Image src={indexDevices} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
