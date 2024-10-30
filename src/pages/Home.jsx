import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

import MyNavbar from "../components/MyNavbar";

/*const Home = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [search, setSearch] = useState("");*/
const apikey = import.meta.env.VITE_API_KEY;

/*const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };*/

/*const showPosition = (position) => {
    console.log("position :>> ", position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeather(lat, lon);
  };

  const fetchWeather = async (lat, lon) => {
    /* response = await fetch(url);*/
//`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}*/`
const Home = () => {
  const [userLocationWeather, setUserLocationWeather] = useState(null);
  const [location, setLocation] = useState("");

  const api_key = "d46fbbac7a12b94e8a4575d233dd05cf";
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const search = async () => {
    if (location.trim() !== "") {
      console.log("location :>> ", location);
      console.log("api_key :>> ", api_key);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const searchData = await response.json();
      console.log("userLocationWeather", searchData);
      setUserLocationWeather(searchData);
      setLocation("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect(() => {
    // getLocation();
    // fetchWeather();
  }, []);

  return (
    <>
      <h5>
        This is the home page, in which we see the picture of the church and the
        weather for the day, and the search of the user for the weather
      </h5>

      <div className="container">
        <div className="weather-app">
          <div className="search">
            <div className="search-top">
              <i className="fa-solid fa-location-dot"></i>
              {userLocationWeather && (
                <div className="location">{userLocationWeather.name}</div>
              )}
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
              {/* onChange={(e) => setSearch(e.target.value)} */}
              <button>Search</button>
            </div>
          </div>
          <div className="weather">
            {" "}
            {/* <img src={sunny} alt="sunny" />{" "} */}
          </div>
          {userLocationWeather && (
            <div className="weather-type">
              {userLocationWeather.weather
                ? userLocationWeather.weather[0].main
                : null}
            </div>
          )}

          <div className="temp">
            {userLocationWeather
              ? `Temp: ${Math.floor(userLocationWeather.main.temp)}°`
              : null}
          </div>
          <div className="weather-date">
            <p>Tue, 29 October</p>
          </div>
          <div className="weather-data">
            <div className="humidity">
              <div className="data-name">Humidity</div>
              <i className="fa-solid fa-droplet"></i>
              <div className="data">
                {userLocationWeather.main
                  ? userLocationWeather.main.humidity
                  : null}
              </div>
              <div className="wind"></div>
              <div className="data-name">Wind</div>
              <i className="fa-solid fa-wind"></i>
              <div className="data">{Data.wind ? data.wind.speed : null}</div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div>
              This section should contain a search input for the user to type
              the name of a city and get the weather from there
            </div>
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2h1cmNofGVufDB8fDB8fHww"
              // rounded
              fluid
            />
          </Col>
          <Col xs={6} md={4}>
            {/* {userLocation && (
              <div>
                <p>{userLocation.name}</p>
                <p>{userLocation.main.temp}</p>
                <p>{userLocation.weather[0].description}</p>
              </div>
            )} */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
