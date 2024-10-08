import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "../../CSS/map_box.css";

const mapBoxAccessCode = import.meta.env.VITE_MAPBOX;
mapboxgl.accessToken = mapBoxAccessCode;

const SmallMap = ({ location }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [location["co-ords"].lng, location["co-ords"].lat],
      zoom: 14,
    });

    new mapboxgl.Marker()
      .setLngLat([location["co-ords"].lng, location["co-ords"].lat])
      .setPopup(new mapboxgl.Popup().setHTML(`<h6 >${location.name}</h6>`))
      .addTo(map.current);
  }, [location]);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "100%", borderRadius: "8px" }}
      className="map-container"
    />
  );
};

export default SmallMap;
