import React from "react";
import indexUnit from "../../../assets/Images/Admin_images/Home/Units/Units.jpeg";
import Image from "../../../Components/Image/Image";

export default function Units() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Unit</h1>
      <Image src={indexUnit} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
