import React, { useState } from "react";

export default function SliderImage({ imageArray }) {
  let [currentImageIndex, setCurrentImageIndex] = useState(0);
  function ChangeImageIndexNext() {
    if (currentImageIndex !== imageArray.length - 1) {
      setCurrentImageIndex(++currentImageIndex);
    } else {
      setCurrentImageIndex(0);
    }
  }
  function ChangeImageIndexPrev() {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex(--currentImageIndex);
    } else {
      setCurrentImageIndex(imageArray.length - 1);
    }
  }
  return (
    <div className="imageSliderContainer">
      <i class="fa-solid fa-backward back" onClick={ChangeImageIndexPrev}></i>
      <img src={imageArray[currentImageIndex]} alt="ImageSlider" />
      <i class="fa-solid fa-forward next" onClick={ChangeImageIndexNext}></i>
    </div>
  );
}
