import React from "react";
import indexSector from "../../../assets/Images/Home/Sectors/Sectors.jpeg";

export default function Sectors() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Sector</h1>
      <img src={indexSector} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
