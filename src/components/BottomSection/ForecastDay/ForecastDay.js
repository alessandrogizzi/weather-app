import React, { Component } from 'react';

export default class ForecastDay extends Component {
	render() {
		const { hour } = this.props;
		const time = hour.dt_txt.split(' ');

		return (
			<div className='forecastday-container'>
				<div className='image'>
					<img
						src={`http://openweathermap.org/img/wn/${hour.weather[0]
							.icon}@2x.png`}
						alt={hour.weather[0].description}
					/>
					<div className='text'>
						{hour.weather[0].description}
						<p className='temp'>{hour.main.temp}°</p>
						<p>{time[1]}</p>
						<p>{time[0]}</p>
					</div>
				</div>
			</div>
		);
	}
}
