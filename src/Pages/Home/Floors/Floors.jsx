import React from "react";
import indexFloor from "../../../assets/Images/Home/Floors/Floors.jpeg";
import Image from "../../../Components/Image/Image";

export default function Floors() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Floor</h1>
      <Image src={indexFloor} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
