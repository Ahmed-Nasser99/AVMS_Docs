import React from "react";
import indexCompany from "../../../assets/Images/Admin_images/Home/Companies/Companies.jpeg";
import Image from "../../../Components/Image/Image";

export default function Companies() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Company</h1>
      <Image src={indexCompany} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
