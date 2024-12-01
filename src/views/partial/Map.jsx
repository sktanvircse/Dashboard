import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const Map = ({ onSelectLocation, onClose, latitude, longitude }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [selectedLatitude, setSelectedLatitude] = useState("");
  const [selectedLongitude, setSelectedLongitude] = useState("");

  useEffect(() => {
    if (!mapRef.current) return;

    // const map = L.map(mapRef.current).setView([23.684994, 90.356331], 7);
    const map = L.map(mapRef.current);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Customize marker icon
    const customIcon = L.divIcon({
      html: '<i class="fa fa-map-marker-alt fa-2x " style="color: red; font-size: 20px";></i>', // Font Awesome icon
      // iconSize: [32, 32], // Set the size of the icon
      iconAnchor: [7, 20], // Set the anchor point of the icon
      className: 'p-unset m-unset'
    });


    // Initialize marker
    markerRef.current = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

    if (latitude !== "" && longitude !== "") {
      map.setView([latitude, longitude], 14);
    } else {
      map.setView([23.684994, 90.356331], 10);
    }

    map.on("click", (event) => {
      const { lat, lng } = event.latlng;
      setSelectedLatitude(lat.toFixed(6));
      setSelectedLongitude(lng.toFixed(6));
      onSelectLocation(lat.toFixed(6), lng.toFixed(6));

      // Update marker position
      markerRef.current.setLatLng([lat, lng]).update();
      // map.setView([lat, lng], 12);
    });

    return () => {
      map.off("click");
      map.remove();
    };
  }, [onSelectLocation, latitude, longitude]);

  return (
    <>
      <div>
        <div
          ref={mapRef}
          style={{
            width: "600px",
            height: "600px",
            right: "-2vw",
            top: "0vw",
            position: "absolute",
            zIndex: "99",
            border: "20px white solid",
            borderRadius:"5px"
          }}
        />
        <button
          onClick={onClose}
          style={{
            right: "-1vw",
            top: "28vw",
            position: "absolute",
            zIndex: "999",
            marginRight: "5px",
          }}
          className="btn bg-brand text-white"
        >
          Close
        </button>
      </div>
      <div>
        <p>Selected Latitude: {selectedLatitude}</p>
        <p>Selected Longitude: {selectedLongitude}</p>
      </div>
    </>
  );
};

export default Map;
