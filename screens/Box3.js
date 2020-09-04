
import React from 'react';
import {Text,Dimensions, View} from 'react-native';

const { width, height } = Dimensions.get("window");



const Box3 = (props) => (
	<View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: '#fff', marginRight: 5,borderColor: '#ddd', borderWidth: 1, borderRadius: 1, borderRadius: 2 }}>
        <Text style={{ fontWeight: '700', fontSize: 10 }}>{props.name}</Text>
    </View>
);
export default Box3;