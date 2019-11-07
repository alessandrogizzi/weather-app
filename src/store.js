import React, { Component } from 'react';

class Store extends Component {
	state = {
    appName: 'Weather Up'
	};

	render() {
		return React.Childern.map(this.props.children, (child) => {
      return React.cloneElement(child, { ...this.state });
    });
	}
}

export default Store;
