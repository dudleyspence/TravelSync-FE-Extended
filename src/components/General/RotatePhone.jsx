import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/RotatePhone.json";

export default function RotatePhone() {
  return (
    <div className="rotatePhone">
      <Lottie
        animationData={animationData}
        loop={true}
        className="uploadAnimation"
      />
      <p>Please rotate your device</p>
    </div>
  );
}
