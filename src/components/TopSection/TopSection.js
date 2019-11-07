import React, { Component } from 'react';

import './topSection.scss';

import Weather from './Weather/Weather';

export default class TopSection extends Component {
	render() {
		return (
			<div className='top-container'>
				<div className='title'>Weather Up</div>
				<Weather />
				<button className="btn btn-select-location">Select Location</button>
			</div>
		);
	}
}
