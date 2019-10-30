import React from 'react';
import Card from './common/card';
import CitySearcher from './citySearcher';


const Forecast = ({ weathers, onDelete, onSearch }) => {
    return (
        <div >
            <CitySearcher
                onSearch={onSearch}
                title={"5 Days Forecast"}
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

export default Forecast;