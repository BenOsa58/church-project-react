import React from "react";
import { Card } from "react-bootstrap";

function CityWeatherCard({ userLocationWeather }) {
  return (
    <Card className="text-center">
      <Card.Title>The weather in {userLocationWeather.name}</Card.Title>
      <Card.Body>
        {/* <Card.Header>tempetarure</Card.Header> */}
        <Card.Text>
          {`${Math.floor(userLocationWeather.main.temp)}°` || "N/A"}
        </Card.Text>
        <Card.Text>
          {`${userLocationWeather.main.humidity}%` || "N/A"}
        </Card.Text>
        <Card.Text>
          {`${userLocationWeather.wind.speed} Km/h` || "N/A"}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default CityWeatherCard;
