import React from "react";
import indexBuilding from "../../../assets/Images/Home/Buildings/Buildings.jpeg";
import Image from "../../../Components/Image/Image";

export default function Buildings() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Building</h1>
      <Image src={indexBuilding} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
