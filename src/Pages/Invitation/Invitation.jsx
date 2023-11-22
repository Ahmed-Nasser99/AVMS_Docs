import React from "react";
import Invitation1 from "../../assets/Images/Invation/InvitationSliderImage/Invitation1.jpeg";
import Invitation2 from "../../assets/Images/Invation/InvitationSliderImage/Invitation2.jpeg";
import Invitation3 from "../../assets/Images/Invation/InvitationSliderImage/Invitation3.jpeg";
import InvitationMailImage from "../../assets/Images/Invation/InvitationEmail.jpeg";
import SliderImage from "../../utilities/SliderImage/SliderImage";
import Image from "../../Components/Image/Image";
export default function Invitation() {
  let imageArray = [Invitation1, Invitation2, Invitation3];
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Invitation Form</h1>
      <SliderImage imageArray={imageArray} />
      <h1 className="text-muted">Invitation Mail</h1>
      <Image
        src={InvitationMailImage}
        alt={"Invitation Email Image"}
        className={"rounded"}
      />
    </div>
  );
}
