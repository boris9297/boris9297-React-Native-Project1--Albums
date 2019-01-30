import React from 'react';
import { Text, View } from 'react-native';


// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//Component
// pass props from index.js
const Header = (props) => {
	// const { textStyle, viewStyle } = styles;
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}> {props.headerText} </Text>
		</View>


	);
};


const styles = {
	textStyle: {
		fontSize: 20
	},

	viewStyle: {
		backgroundColor: '#F8F8F8',
		// justifyContent: 'center',
		// // alighContent: 'center',
		// // alignItem: 'center',
		// alignSelf: 'center',
		height: 100,
		paddingTop: 40,
		paddingBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2, // 0 to 1
		elevation: 2,
		position: 'relative'
	},


};
export default Header;
