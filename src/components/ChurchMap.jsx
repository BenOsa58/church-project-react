import React from "react";
import { useEffect } from "react";
import { Col, Image } from "react-bootstrap";

function ChurchMap() {
  return (
    <>
      <h2>Find us</h2>

      <div
        style={{
          overflow: "hidden",
          maxWidth: "100%",
          width: "300px",
          height: "300px",
        }}
      >
        <div
          id="google-maps-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: "0" }}
            src="https://www.google.com/maps/embed/v1/place?q=Tempelhofer+Damm+133,+12099+Berlin&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ChurchMap;
