import React from "react";
import ModalToViewImage from "../../utilities/ModalToViewImage/ModalToViewImage";

export default function Image({ src, alt, className }) {
  return (
    <>
      <ModalToViewImage src={src} />
      <img
        src={src}
        alt={alt}
        title="Click To view"
        className={className}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          console.log("CLICK");
        }}
      />
    </>
  );
}
