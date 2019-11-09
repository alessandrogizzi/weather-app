import React, { Component } from 'react';

import SunImg from '../../../resources/images/sun.png';

export default class Weather extends Component {
	render() {
		const { location, temp, description, icon, isDay } = this.props;
		return (
			<div className='weather-container'>
				<div className='header'>{location}</div>
				<div className='inner-container'>
					<div className='image'>
						<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
					</div>
					<div className='current-weather'>{temp}°</div>
				</div>
				<div className='footer'>{description}</div>
			</div>
		);
	}
}
