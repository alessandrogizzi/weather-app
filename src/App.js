import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import './sass/app.scss';

import TopSection from './components/TopSection/TopSection';
import BottomSection from './components/BottomSection/BottomSection';

const WEATHER_KEY = '43bcf5b092a8fe62986cdf7882719ff9';
class App extends Component {
	state = {
		cityName: 'Naples',
		isLoading: 'true'
	};

	updateWeather() {
		const { cityName } = this.state;

		const URL = `https://api.openweathermap.org/data/2.5/forecast?
		q=${cityName}
		&APPID=${WEATHER_KEY}&units=metric`;
		axios
			.get(URL)
			.then((res) => {
				return res.data;
			})
			.then((data) => {
				console.log(data);
				this.setState({
					isLoading: false,
					temp: data.list[0].main.temp,
					description: data.list[0].weather[0].description,
					icon: data.list[0].weather[0].icon,
					isDay: data.list[0].sys.pod,
					forecastList: data.list

				});
			})
			.catch((err) => {
				if (err) console.error('cannot fetch Weather Data from API', err);
			});
	}

	componentDidMount() {
		const { eventEmitter } = this.props;

		this.updateWeather();

		eventEmitter.on('updateWeather', (data) => {
			this.setState({ cityName: data }, () => this.updateWeather());
			console.log('LocationName:', data);
		});
	}

	render() {
		const { isLoading, cityName, temp, isDay, description, icon, forecastList } = this.state;
		return (
			<div className='app-container'>
				<div className='main-container'>
					{isLoading && <h3>Loading Weather...</h3>}
					{!isLoading && (
						<div className='top-section'>
							<TopSection
								location={cityName}
								temp={temp}
								description={description}
								icon={icon}
								isDay={isDay}
								eventEmitter={this.props.eventEmitter}
							/>
						</div>
					)}
					<div className='bottom-section'>
						<BottomSection forecastList={forecastList}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
