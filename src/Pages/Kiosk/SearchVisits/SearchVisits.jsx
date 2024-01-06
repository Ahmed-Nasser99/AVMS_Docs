import React from "react";
import listVisits from "../../../assets/Images/Kiosk_images/Upcoming Visits.jpeg";
import Image from "../../../Components/Image/Image";

export default function SearchVisits() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Search Visits</h1>
      <Image src={listVisits} alt={"listVisits"} className={"rounded"} />
    </div>
  );
}
