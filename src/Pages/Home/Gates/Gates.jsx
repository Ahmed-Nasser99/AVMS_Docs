import React from "react";
import indexGates from "../../../assets/Images/Home/Gates/Gates.jpeg";
import Image from "../../../Components/Image/Image";
export default function Gates() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Gates</h1>
      <Image src={indexGates} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
