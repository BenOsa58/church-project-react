import React, { useEffect, useState } from "react";
import { Badge, Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import CityWeatherCard from "./CityWeatherCard";
function UsersLocationWeather() {
  const [userLocation, setUserLocation] = useState(null);
  const [userLocationWeather, setUserLocationWeather] = useState(null);

  const apikey = import.meta.env.VITE_WEATHER_API_KEY;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    console.log("position :>> ", position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeather(lat, lon);
  };

  const fetchWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`;
    const response = await fetch(url);

    const result = await response.json();
    console.log("weather at users location :>> ", result);
    setUserLocationWeather(result);
  };
  const handleButtonClick = (e) => {
    search();
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {userLocationWeather && (
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              you are at
              <div className="fw-bold">{userLocationWeather?.name}</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              Temperature is
              <div className="fw-bold">{userLocationWeather.main.temp} C</div>
              {/* <Badge bg="primary" pill>
              14C
            </Badge> */}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              Feels Like
              <div className="fw-bold">
                {userLocationWeather.main.feels_like} C
              </div>
              {/* <Badge bg="primary" pill>
              14C
            </Badge> */}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              Wind blows at
              <div className="fw-bold">
                {userLocationWeather.wind.speed} km/h
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  );
}

export default UsersLocationWeather;
