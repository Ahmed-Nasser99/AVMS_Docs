import React from "react";
import indexGates from "../../../assets/Images/Home/Gates/Gates.jpeg";

export default function Gates() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Gates</h1>
      <img src={indexGates} alt="Main Dashboard" className="rounded" />
    </div>
  );
}
