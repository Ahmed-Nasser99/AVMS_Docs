import React from "react";
import Image from "../../../Components/Image/Image";
import VisitTypeImg from "../../../assets/Images/Kiosk_images/VisitTypeKiosk.jpeg";

export default function VisitType() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Visit Type</h1>
      <Image src={VisitTypeImg} alt={"Main WelcomeImg"} className={"rounded"} />
    </div>
  );
}
