import React from "react";
import { Card, Feed } from "semantic-ui-react";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCoffee, faCloud, faCloudRain, faSnowman, faSmog, faSun } from '@fortawesome/free-solid-svg-icons';


const WeatherCard = ({ tempature, city, sunrise, sunset, humidity, icon }) => {
 
  let weatherIcon = null;

  if (icon === 'Haze') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
  } else if (icon === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} size="lg" color="#212121" />
  } else if (icon === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
  } else if (icon === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
  } else if (icon === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowman} size="lg" color="#212121" />
  } else if (icon === 'Mist') {
    weatherIcon = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
  } else if (icon === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} size="lg" color="#212121" />
  } else if (icon === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
  }


  return (
    <Card className="weather-card-main">
      <Card.Content className="weather-card">
        <Card.Header className="weather-card-child" >{city}</Card.Header>
        <div className="icon-container">
          {weatherIcon}
          {/* <FontAwesomeIcon icon={returnIcon()} size="lg" color="#212121"/> */}
        </div>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Content>
              <h5 className="weather-card-child" >{moment().format('MMMM Do, h:mm a')}</h5>
              <div className="weather-card">
                <div className="weather-card-child">
                <b>Tempature:</b> {Math.floor(tempature)}℃
                </div>
                <div className="weather-card-child">
                <b> Humidity:</b> {humidity}%
                </div>
                <div className="weather-card-child">
                <b>Sunrise:</b> {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                </div>
                <div className="weather-card-child">
                <b>Sunset:</b> {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
                </div>
              </div>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  );
};
export default WeatherCard;
