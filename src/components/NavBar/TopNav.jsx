import React from "react";
import GoToItineraryButton from "./GoToItineraryButton";
import ReturnToMap from "./ReturnToMap";
import HomeButton from "./HomeButton";
import GoToFilesButton from "./GoToFilesButton";

export default function TopNav() {
  return (
    <div className="topNav">
      <HomeButton />
      <GoToItineraryButton />
      <ReturnToMap />
      <GoToFilesButton />
    </div>
  );
}
