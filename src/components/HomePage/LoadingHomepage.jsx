import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/travelLoading.json";

export default function LoadingHomepage() {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        className="uploadAnimation"
      />
    </div>
  );
}
