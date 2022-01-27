import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
// import Weather from "./Weather";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";

const URL = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "d586de666e3f77e79c5e01063ae47055";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");
  const [tempature, setTempature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    axios
      .get(
        `${URL}?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=${API_KEY}`
      )
      .then((weatherData) => {
        console.log(weatherData.data.current.temp);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     await fetch(
  //       `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  //     )
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setData(result);
  //         console.log(result);
  //       });
  //   };
  //   fetchData();
  // }, [lat, long]);

  return (
    <div className="App">
      <Header />
      <WeatherCard tempature={tempature} />
    </div>
  );
}
