import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";

import MyNavbar from "../components/MyNavbar";
import UsersLocationWeather from "../components/UsersLocationWeather";
import ChurchMap from "../components/ChurchMap";
import CityWeatherCard from "../components/CityWeatherCard";

const Home = () => {
  const [userLocationWeather, setUserLocationWeather] = useState(null);
  const [location, setLocation] = useState("");

  const api_key = "d46fbbac7a12b94e8a4575d233dd05cf";
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const search = async () => {
    console.log("search");
    console.log("location :>> ", location);
    if (location.trim() !== "") {
      // console.log("location :>> ", location);
      console.log("api_key :>> ", api_key);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const searchData = await response.json();
      console.log("userLocationWeather", searchData);
      setUserLocationWeather(searchData);
      setLocation("");
    }
  };

  const handleButtonClick = (e) => {
    search();
  };
  useEffect(() => {
    // getLocation();
    // fetchWeather();
  }, []);

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="type the name of a city"
          onChange={handleInputChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={handleButtonClick}
        >
          Search
        </Button>
      </InputGroup>
      {userLocationWeather && (
        <CityWeatherCard userLocationWeather={userLocationWeather} />
      )}

      <Container className="d-flex justify-content-center">
        <Row>
          <Col xs={12} sm={12} md={4} lg={"auto"}>
            <UsersLocationWeather />
          </Col>
          <Col xs={12} sm={12} md={4} lg={"auto"}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Evangelisch-Freikirchliche_Gemeinde_%28Berlin-Tempelhof%29.jpg"
              // rounded
              fluid
              style={{ width: 350, height: 350 }}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={"auto"}>
            <ChurchMap />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
