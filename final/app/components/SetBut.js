import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { lighterWhite } from '../Custom/Colors';



const SetBut = ({ setting }) => (
	<TouchableOpacity onPress={() => navigate('Settings')} >
		<MaterialIcons name="settings" size={30} color={lighterWhite} />
	</TouchableOpacity>
);

export default SetBut;