import React from "react";
import Image from "../../../Components/Image/Image";
import SelectCompany from "../../../assets/Images/Kiosk_images/SelectCompany.jpeg";
import SelectDeparment from "../../../assets/Images/Kiosk_images/SelectDeparment.jpeg";
import SelectDocument from "../../../assets/Images/Kiosk_images/SelectDocument.jpeg";
import PutDocument from "../../../assets/Images/Kiosk_images/PutDocument.jpeg";
import QrPage from "../../../assets/Images/Kiosk_images/Qr Code Screen.jpeg";

export default function CreateTodayInvitation() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Create Today Invitation</h1>
      <Image
        src={SelectCompany}
        alt={"Create Today Invitation"}
        className={"rounded"}
      />
      <Image
        src={SelectDeparment}
        alt={"SelectDeparment"}
        className={"rounded"}
      />
      <Image
        src={SelectDocument}
        alt={"SelectDocument"}
        className={"rounded"}
      />
      <Image src={PutDocument} alt={"PutDocument"} className={"rounded"} />

      <Image src={QrPage} alt={"QrPage"} className={"rounded"} />
    </div>
  );
}
