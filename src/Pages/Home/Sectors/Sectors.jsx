import React from "react";
import indexSector from "../../../assets/Images/Admin_images/Home/Sectors/Sectors.jpeg";
import Image from "../../../Components/Image/Image";
export default function Sectors() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Sector</h1>
      <Image src={indexSector} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
