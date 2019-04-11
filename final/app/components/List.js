import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
	itemListText,
	itemListTextStrike,
	Inactive,
	Active,
	deleteIconColor
} from '../Custom/Colors';

const { width } = Dimensions.get('window');

class List extends Component {
	onToggleSquare = () => {
		const { Complete, id, completeItem, incompleteItem } = this.props;
		if (Complete) {
			incompleteItem(id);
		} else {
			completeItem(id);
		}
	};

	render() {
		const { text, deleteItem, id, Complete } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.column}>
					<TouchableOpacity onPress={this.onToggleSquare}>
						<View
							style={[
								styles.box,
								Complete
									? { borderColor: Active }
									: { borderColor: Inactive }
							]}
						/>
					</TouchableOpacity>
					<Text
						style={[
							styles.text,
							Complete
								? {
										color: itemListTextStrike,
										textDecorationLine: 'line-through'
								  }
								: { color: itemListText }
						]}
					>
						{text}
					</Text>
				</View>
				{Complete ? (
					<View style={styles.button}>
						<TouchableOpacity onPressOut={() => deleteItem(id)}>
							<MaterialIcons
								name="delete-forever"
								size={24}
								color={deleteIconColor}
							/>
						</TouchableOpacity>
					</View>
				) : null}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: width - 50,
		flexDirection: 'row',
		height: width / 8,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 5,
		marginBottom: 10,
		
	},
	column: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width / 1.5
	},
	text: {
		fontWeight: '500',
		fontSize: 16,
		marginVertical: 15
	},
	box: {
		width: 30,
		height: 30,
		borderWidth: 6,
		margin: 10
	},
	button: {
		marginRight: 10
	}
});

export default List;