import React from "react";
import { Card, Feed } from "semantic-ui-react";

const WeatherCard = (Tempature) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>City</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Content>
              <h5>Date</h5>
              <div className="weather-card">
                <div className="weather-card-child">{Tempature}</div>
                <div className="weather-card-child">Humitity</div>
                <div className="weather-card-child">Sunrise</div>
                <div className="weather-card-child">Sunset</div>
              </div>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  );
};
export default WeatherCard;
