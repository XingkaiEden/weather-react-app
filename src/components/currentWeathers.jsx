import React from 'react';
import Card from './common/card';
import CitySearcher from './citySearcher';



const CurrentWeather = ({ weathers, onDelete, onSearch }) => {
    return (
        <div >
            <CitySearcher
                onSearch={onSearch}
                title={"Current Weather"}
            />
            <div className="box">
                <div className="container">
                    <div className="row">
                        {weathers.map(weather =>
                            <Card
                                key={weather.id}
                                weather={weather}
                                onDelete={onDelete}
                            />
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CurrentWeather;