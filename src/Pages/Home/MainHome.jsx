import React from "react";
import mainHome from "../../assets/Images/Home/MainHome.jpeg";
import Image from "../../Components/Image/Image";
export default function MainHome() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Home</h1>
      <Image src={mainHome} alt={"Main Dashboard"} className={"rounded"} />
    </div>
  );
}
