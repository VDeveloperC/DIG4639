import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { inputPlaceholder } from '../Custom/Colors';

const Input = ({ inputValue, onChangeText, AddItem }) => (
	<TextInput
		style={styles.input}
		value={inputValue}
		onChangeText={onChangeText}
		placeholder="Input Task Here"
		placeholderTextColor={inputPlaceholder}
		multiline={true}
		autoCapitalize="sentences"
		selectionColor={'white'}
		maxLength={30}
		returnKeyType="done"
		autoCorrect={false}
		blurOnSubmit={true}
		onSubmitEditing={AddItem}
	/>
);

const styles = StyleSheet.create({
	input: {
		paddingTop: 10,
		paddingRight: 15,
		fontSize: 30,
		color: 'white',
		fontWeight: '500'
	}
});

export default Input;