import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./components/Context/AuthContext/index.jsx";
import { LocationsContextProvider } from "./components/Context/LocationsContextProvider";
import { ItineraryContextProvider } from "./components/Context/ItineraryContextProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <LocationsContextProvider>
        <ItineraryContextProvider>
          <App />
        </ItineraryContextProvider>
      </LocationsContextProvider>
    </AuthProvider>
  </BrowserRouter>
);
