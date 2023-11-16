import React from "react";
import mainHome from "../../assets/Images/Home/MainHome.jpeg";
export default function MainHome() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Home</h1>
      <img src={mainHome} alt="Main Dashboard" className="rounded w-100" />
    </div>
  );
}
