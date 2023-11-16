import React from "react";
import indexUnit from "../../../assets/Images/Home/Units/Units.jpeg";

export default function Units() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Unit</h1>
      <img src={indexUnit} alt="Main Dashboard" className="rounded w-100" />
    </div>
  );
}
