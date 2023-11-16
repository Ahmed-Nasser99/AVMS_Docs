import React from "react";
import indexFloor from "../../../assets/Images/Home/Floors/Floors.jpeg";

export default function Floors() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Floor</h1>
      <img src={indexFloor} alt="Main Dashboard" className="rounded w-100" />
    </div>
  );
}
