import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';

const deltas = {
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
};

export default class Map extends Component {
	static defaultProps = {
		location: {
			latitude: 30.266926,
			longitude: -97.750519
		}
	};

	render() {
		const { location } = this.props;
		return (
			<MapView
				style={styles.container}
				region={{ ...location, ...deltas }}
				showsUserLocation
				showsMyLocationButton
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '80%'
	}
});
