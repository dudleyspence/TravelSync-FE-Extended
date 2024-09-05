import React, { createContext, useEffect, useState } from "react";

export const ItineraryContext = createContext();

export const ItineraryContextProvider = ({ children }) => {
  const [insideItinerary, setInsideItinerary] = useState(false);
  const [currentItinerary, setCurrentItinerary] = useState(() => {
    const storedItinerary = localStorage.getItem("currentItinerary");
    return storedItinerary ? JSON.parse(storedItinerary) : null;
  });
  console.log(insideItinerary);
  useEffect(() => {
    if (currentItinerary) {
      localStorage.setItem(
        "currentItinerary",
        JSON.stringify(currentItinerary)
      );
    } else {
      localStorage.removeItem("currentItinerary");
    }
  }, [currentItinerary]);

  return (
    <ItineraryContext.Provider
      value={{
        currentItinerary,
        setCurrentItinerary,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};
