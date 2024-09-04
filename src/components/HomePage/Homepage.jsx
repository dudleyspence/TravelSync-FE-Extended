import { useState, useContext, useEffect } from "react";

import UserItinerariesList from "./UserItinerariesList";
import logo from "../../assets/TravelSync.png";
import { useNavigate } from "react-router-dom";
import { ItineraryContext } from "../Context/ItineraryContextProvider";
import { useAuth } from "../Context/AuthContext/index";
import { doSignOut } from "../../firebase/auth";
import { getUser } from "../../axios";
import CreateAndJoin from "./CreateAndJoin";
import { LocationContext } from "../Context/LocationsContextProvider";
import TravelLoading from "../General/TravelLoading";

export default function Homepage() {
  const { currentUser } = useAuth();
  const { setCurrentItinerary } = useContext(ItineraryContext);
  console.log(currentUser);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { setLocationsList } = useContext(LocationContext);

  const [itineraryUpdates, setItineraryUpdates] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentItinerary(null);
    if (currentUser) {
      getUser(currentUser.uid)
        .then((user) => {
          setName(user.name);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [currentUser]);

  const handleOnClick = () => {
    setLocationsList([]);
    doSignOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="homepage-container">
      {isLoading ? (
        <TravelLoading />
      ) : (
        <div className="homepage">
          <button onClick={handleOnClick} className="styled-button sign-out">
            Sign Out
          </button>
          <img className="logo" src={logo} alt="logo" />
          <h1>Hello {name}</h1>
          <div className="profileSection"></div>
          <div className="userItineraryControls">
            <CreateAndJoin setItineraryUpdates={setItineraryUpdates} />
          </div>
          <div className="userItineraryList">
            <h4>Itineraries:</h4>
            <UserItinerariesList
              itineraryUpdates={itineraryUpdates}
              setItineraryUpdates={setItineraryUpdates}
            />
          </div>
        </div>
      )}
    </div>
  );
}
