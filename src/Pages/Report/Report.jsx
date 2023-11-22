import React from "react";
import indexReport from "../../assets/Images/Reports/MainReport.jpeg";
import ReportContainer from "../../assets/Images/Reports/ReportContainer.jpeg";
import ReportDetails from "../../assets/Images/Reports/RecordDetails.jpeg";
import Image from "../../Components/Image/Image";
export default function Report() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Report</h1>
      <Image src={indexReport} alt={"Main Report"} className={"rounded"} />
      <h1 className="text-muted">Report Table</h1>
      <Image src={ReportContainer} alt={"Report Table"} className={"rounded"} />
      <h1 className="text-muted">Report Details</h1>
      <Image src={ReportDetails} alt={"Report Details"} className={"rounded"} />
    </div>
  );
}
