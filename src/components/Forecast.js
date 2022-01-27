import React from 'react';
import { Card } from 'semantic-ui-react';

export default function Forecast({ forecast }) {
    return (
        <div className="forecast-cards">
            <Card.Group>
                {forecast.map((data) => {
                    return (
                        <Card className='forecast-card'>
                            <Card.Content>
                                <Card.Header className='forecast-header'>
                                Teampature: {Math.round((data.temp.max + data.temp.min)/2)} ℃
                                </Card.Header>
                                <Card.Meta className='forecast-header'>
                                Humidity: {data.humidity}%
                                </Card.Meta>
                                <Card.Description className='temp-desc'>
                                Description: {data.weather[0].description}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    );
                })}
            </Card.Group>
        </div>
    )
}