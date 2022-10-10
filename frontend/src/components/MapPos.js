import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import SectionTitle from "./SectionTitle";
import "../assets/css/Map.css";

export default function MapPos() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(8.706043);
  const [lat, setLat] = useState(36.17178);
  const [zoom, setZoom] = useState(16);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWRhbWVsYW1yaSIsImEiOiJjbDJ1bTdrbnMwM2NnM3BzdHZnNDF1OWs0In0.5bUbSc-2bPKJfD4AHSfmbw";

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    //new mapboxgl.Marker().setLngLat([8.706043, 36.17178]).addTo(map);
  });
  return (
    <>
      <section className="projects-section">
        <br />
        <SectionTitle title="Notre local" />

        <div
          style={{
            height: "400px",

            padding: "20px",
            margin: "20px",
            width: "95%",
          }}
        >
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div
            ref={mapContainer}
            className="map-container"
            style={{
              height: "400px",
            }}
          />
        </div>
        <br />
      </section>
    </>
  );
}
