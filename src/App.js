import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
// import Weather from "./Weather";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
import Forecast from './components/Forecast';
import { Loader } from "semantic-ui-react";

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
  const [icon, setIcon] = useState('');
  const [forecast, setForecast] = useState([]);
  const [loading, setloading] = useState(true);

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
        setloading(false);
        console.log(weatherData.data);
        setTempature(weatherData.data.current.temp);
        setSunrise(weatherData.data.current.sunrise);
        setSunset(weatherData.data.current.sunset);
        setHumidity(weatherData.data.current.humidity);
        setCity(weatherData.data.timezone);
        setIcon(weatherData.data.current.weather[0].main);
        setForecast(weatherData.data.daily)
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
      {loading ? (
        <><p>Loading Please wait</p><Loader active inline='centered' /></>
      ) : (

        <WeatherCard
          tempature={tempature}
          humidity={humidity}
          sunset={sunset}
          sunrise={sunrise}
          city={city}
          icon={icon}
        />
      )}
      <Forecast forecast={forecast} />
    </div>
  );
}
