import React, { Component } from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
	// const { textStyle, viewStyle } = styles;
	return (
		<View>
			<Text>{props.record.title}</Text>
		</View>
	);
};
export default AlbumDetail;
