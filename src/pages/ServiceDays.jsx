import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../context/Authcontext";
import { auth } from "../config/firebaseConfig";
const ServiceDays = () => {
  console.log("auth :>> ", auth);

  const { user } = useContext(AuthContext);
  // console.log("user :>> ", user);

  const [weatherForecast, setWeatherForecast] = useState(null);
  const [location, setLocation] = useState("");
  // const apikey = import.meta.env.VITE_API_KEY;
  const apikey2 = import.meta.env.VITE_API_KEY_WEATHERAPI;
  // const churchLatitude = "52.467";
  // const churchLongitude = "13.386";
  const fetchChurchLocationWeather = async (lat, lon) => {
    // const urlOpenWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${churchLatitude}&lon=${churchLongitude}&units=metric&appid=${apikey}`;
    const urlWeatherApi = `http://api.weatherapi.com/v1/forecast.json?key=${apikey2}&q=Berlin%20Tempelhof&days=3&aqi=no&alerts=no`;
    // const response = await fetch(urlOpenWeatherAPI);
    const response = await fetch(urlWeatherApi);

    const result = await response.json();
    console.log("weather forecast at church location :>> ", result);
    setWeatherForecast(result);
  };

  const generateNextWeekDays = (date) => {
    console.log("date :>> ", date);
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const todayDayNumber = new Date(date * 1000).getDay();
    const todayDay = weekday[todayDayNumber];
    console.log("todayDay :>> ", todayDay);
    return todayDay;
  };

  const servicePerDay = (day) => {
    console.log("day :>> ", day);
    const serviceTypes = [
      { day: "Sunday", serviceType: "Sunday service" },
      { day: "Monday", serviceType: "Counselling" },
      { day: "Tuesday", serviceType: "Bible study" },
      { day: "Wednesday", serviceType: "Call in for prayer" },
      { day: "Thursday", serviceType: "Call in for prayer" },
      { day: "Friday", serviceType: "Prayer meeting" },
      { day: "Saturday", serviceType: "Choir practice" },
    ];

    const service = serviceTypes.find((object) => {
      return object.day === day;
    });
    console.log("service :>> ", service);
    return service.serviceType;
  };

  useEffect(() => {
    fetchChurchLocationWeather();
  }, []);

  return (
    <>
      <h1> Services Days </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Service</th>
            <th>temp</th>
            <th>weather</th>
          </tr>
        </thead>
        <tbody>
          {weatherForecast &&
            weatherForecast.forecast.forecastday.map((day) => {
              return (
                <tr>
                  <td>{generateNextWeekDays(day.date_epoch)}</td>
                  <td>
                    service type:{" "}
                    {servicePerDay(generateNextWeekDays(day.date_epoch))}{" "}
                  </td>
                  <td>{day.day.maxtemp_c} C</td>
                  <td>
                    {day.day.condition.text}{" "}
                    <img src={day.day.condition.icon} alt="" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default ServiceDays;
