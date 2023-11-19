import React from "react";
import indexReport from "../../assets/Images/Reports/MainReport.jpeg";
import ReportContainer from "../../assets/Images/Reports/ReportContainer.jpeg";
import ReportDetails from "../../assets/Images/Reports/RecordDetails.jpeg";
export default function Report() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Report</h1>
      <img src={indexReport} alt="Main Dashboard" className="rounded" />
      <h1 className="text-muted">Report Table</h1>
      <img src={ReportContainer} alt="Main Dashboard" className="rounded" />
      <h1 className="text-muted">Report Details</h1>
      <img src={ReportDetails} alt="Main Dashboard" className="rounded" />
    </div>
  );
}
