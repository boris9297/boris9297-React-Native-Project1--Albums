/** @format */
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//Component
const App = () => {
	return (
		<Text> WTF </Text>,
		// <Header></Header> ok
		<Header headerText={'Albums'} />
	);
};


//only root use AppRegistry
AppRegistry.registerComponent('albums', () => App);
