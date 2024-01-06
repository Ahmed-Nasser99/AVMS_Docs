import React from "react";
import Image from "../../../Components/Image/Image";
import WelcomeImg from "../../../assets/Images/Kiosk_images/Welcome.jpeg";

export default function Welcome() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Welcome</h1>
      <Image src={WelcomeImg} alt={"Main WelcomeImg"} className={"rounded"} />
    </div>
  );
}
