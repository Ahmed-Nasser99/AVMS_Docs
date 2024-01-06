import React from "react";
import indexReport from "../../assets/Images/Reports/MainReport.jpeg";
import ReportContainer from "../../assets/Images/Reports/ReportContainer.jpeg";
import ReportDetails from "../../assets/Images/Reports/RecordDetails.jpeg";
import Image from "../../Components/Image/Image";
export default function Report() {
  let [ChosseImage, setImage] = React.useState("ahmed");
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Report</h1>
      <div
        onClick={() => {
          setImage(indexReport);
        }}
      >
        <Image
          src={indexReport}
          alt={"Main Report"}
          className={"rounded"}
          modalImage={ChosseImage}
        />
      </div>
      <h1 className="text-muted">Report Table</h1>
      <div
        onClick={() => {
          setImage(ReportContainer);
        }}
      >
        <Image
          src={ReportContainer}
          alt={"Report Table"}
          className={"rounded"}
          modalImage={ChosseImage}
        />
      </div>
      <h1 className="text-muted">Report Details</h1>
      <div
        onClick={() => {
          setImage(ReportDetails);
        }}
      >
        <Image
          src={ReportDetails}
          alt={"Report Details"}
          className={"rounded"}
          modalImage={ChosseImage}
        />
      </div>
    </div>
  );
}
