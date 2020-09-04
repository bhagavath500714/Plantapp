
import React from 'react';
import {Text,Dimensions, Image, View} from 'react-native';

const { width, height } = Dimensions.get("window");



const Box1 = (props) => {
	// console.log(props)
	return (
				<>
				{props.todos.map(todo => { 
					return (
						<View key={todo.id} style={{ width: 130, height: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#ddd' }}>
                                <View style={{ flex: 2 }}>
                                    <Image source={todo.image} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                                </View>
                                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                <Text>{todo.name}</Text> 
                                </View>
                            </View>
					)
				
				})}
				</>
			)
			

		}
			


export default Box1;