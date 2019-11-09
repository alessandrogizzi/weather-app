import React, { Component } from 'react';

import './bottom.scss';
import ForecastDay from './ForecastDay/ForecastDay';

export default class Bottom extends Component {
	render() {
		const { forecastList } = this.props;
		let forecastMax = [];
		if (forecastList) {
			for (let i = 1; i < 5; i++) forecastMax.push(forecastList[i]);
		}
		return (
			<div className='bottom-container'>
				<div className='inner-container'>
					{forecastMax &&
						forecastMax.map((hour, idx) => {
							return <ForecastDay hour={hour} key={hour.dt} />;
						})}
				</div>
			</div>
		);
	}
}
