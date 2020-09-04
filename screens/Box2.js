
import React from 'react';
import {Text,Dimensions, Image, View} from 'react-native';
import StartRating from 'react-native-star-rating'

const { width, height } = Dimensions.get("window");



const Box2 = (props) => (
	
                            <View style={{ width: props.width / 2 - 30, height: props.width / 2 - 30, borderWidth: 0.5, borderColor: '#ddd', marginTop: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <Image style={{flex: 1, width: null, height: null, resizeMode: 'cover'}} source={require('../assets/images/explore_4.png')} />
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
<Text style={{ fontSize: 10, color: '#b63838' }}> {props.type}</Text>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.name} </Text>
									<Text>{props.price}$</Text>
									<StartRating 
										disable={true}
										maxStars={5}
										rating={props.rating}
										starSize={10}
									/>
                                </View>
                            </View>
                 
);
export default Box2;