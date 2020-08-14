import React from "react";
import "./style.css";
import Map from "./Maps";
import credentials from "./credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

export default function App() {
  return (
    <div>
      <h1>Demo Mapa React JS</h1>
       <Map
        googleMapURL= {mapURL}
        containerElement= {<div style={{height: '400px'}}/>}
        mapElement= {<div style={{height: '100%'}}/>}
        loadingElement= {<p>Cargando></p>}
      />
    </div>
  );
}
