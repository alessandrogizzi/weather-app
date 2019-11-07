import React, { Component } from 'react';
import './App.css';

import './sass/app.scss';

import TopSection from './components/TopSection/TopSection';
import BottomSection from './components/BottomSection/BottomSection';

class App extends Component {
	render() {
		return (
			<div className='app-container'>
				<div className='main-container'>
					<div className='top-section'>
						<TopSection />
					</div>
					<div className='bottom-section'>
						<BottomSection />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
