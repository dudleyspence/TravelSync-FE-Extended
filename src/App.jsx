import MapPage from "./components/MapPage/MapPage";
import "mapbox-gl/dist/mapbox-gl.css";
import { Route, Routes } from "react-router-dom";
import LocationDetail from "./components/MapPage/LocationDetail";
import ItineraryPage from "./components/Itinerary/ItineraryPage";
import Homepage from "./components/HomePage/Homepage";
import Login from "./components/Auth/Login";
import FilesPage from "./components/FilesPage/FilesPage";
import SignUp from "./components/Auth/SignUp";
import { useAuth } from "./components/Context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ItineraryContext } from "../src/components/Context/ItineraryContextProvider";

function App() {
  const { userLoggedIn } = useAuth();
  const { currentItinerary } = useContext(ItineraryContext);

  return (
    <div className="app-container">
      <Routes className="app-container">
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* Protected Routes with Conditional Rendering */}
        <Route
          path="/"
          element={
            userLoggedIn ? <Homepage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/map"
          element={
            userLoggedIn ? (
              currentItinerary ? (
                <MapPage className="map-container" />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/location/:place_id"
          element={
            userLoggedIn ? (
              currentItinerary ? (
                <LocationDetail />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/itinerary_page"
          element={
            userLoggedIn ? (
              currentItinerary ? (
                <ItineraryPage />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/files_page"
          element={
            userLoggedIn ? (
              currentItinerary ? (
                <FilesPage />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
