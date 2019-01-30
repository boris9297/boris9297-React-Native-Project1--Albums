import React from 'react';
import { Text, View } from 'react-native';


// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//Component
const Header = () => {
	// const { textStyle, viewStyle } = styles;
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}> Albums! </Text>
		</View>


	);
};


const styles = {
	textStyle: {
		fontSize: 20
	},

	viewStyle: {
		backgroundColor: '#F8F8F8'
	}
};
export default Header;
