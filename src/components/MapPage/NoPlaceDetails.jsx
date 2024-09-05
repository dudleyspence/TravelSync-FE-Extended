import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/NoPlaces.json";
import { Navigate, useNavigate } from "react-router-dom";

export default function NoPlaceDetails() {
  const navigate = useNavigate();
  return (
    <div className="noPlacesPage">
      <Lottie
        animationData={animationData}
        loop={true}
        className="noPlacesAnimation"
      />
      <p>Unfortunately we dont have any additional detail for this location</p>
      <p>
        Try searching for the location using a different spelling, prefix or
        suffix
      </p>
      <button
        className="styled-button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Click here to return
      </button>
    </div>
  );
}
