import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
	// const { textStyle, viewStyle } = styles;
	return (
		<Card>
			<CardSection>
				<Text>{props.record.title}</Text>
			</CardSection>
		</Card>
	);
};
export default AlbumDetail;
