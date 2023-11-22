import React from "react";
import indexBlacklist from "../../../assets/Images/Home/Blacklist/Blacklist.jpeg";
import Image from "../../../Components/Image/Image";

export default function Blacklist() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Blacklist</h1>
      <Image
        src={indexBlacklist}
        alt={"Main Dashboard"}
        className={"rounded"}
      />
    </div>
  );
}
