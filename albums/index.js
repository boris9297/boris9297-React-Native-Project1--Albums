/** @format */
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//Component
// use view to wrap components
const App = () => {
	return (
		<View>
			<Text> WTF </Text>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
	);
};


//only root use AppRegistry
AppRegistry.registerComponent('albums', () => App);
