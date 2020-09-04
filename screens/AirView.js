import React , { useEffect, useState } from 'react';
import {
    Platform,
    StyleSheet,
    Text, Image,
    TouchableOpacity,
    View, Animated, Easing, Dimensions, TextInput, SafeAreaView, StatusBar, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'



const { width, height } = Dimensions.get("window");

const scrollY = new Animated.Value(0)
const startHeaderHeight = 80
const endHeaderHeight = 50

 const animatedHeaderHeight = scrollY.interpolate({
     inputRange:[0,50],
     outputRange: [startHeaderHeight, endHeaderHeight],
     extrapolate: 'clamp'
 })

 const animatedOpacity = animatedHeaderHeight.interpolate({
    inputRange:[endHeaderHeight, startHeaderHeight],
    outputRange: [0,1],
    extrapolate: 'clamp'
})

const animatedTagTop= animatedHeaderHeight.interpolate({
    inputRange:[endHeaderHeight, startHeaderHeight],
    outputRange: [-30,10],
    extrapolate: 'clamp'
})






const AirView = () => {

    const [todos, setTodos] = useState([
        {
          id: 1,
          name: 'Home',
          image: require("../assets/images/explore_3.png")
        },
        {
          id: 2,
          name: 'Home1',
          image: require("../assets/images/explore_4.png")
        },
        {
          id: 3,
          name: 'Home3',
          image: require("../assets/images/explore_3.png")
        },
    ]);

    useEffect(() => {
        if(Platform.OS == 'android') 
        {
            startHeaderHeight = 100 + StatusBar.currentHeight
            endHeaderHeight = 70 + StatusBar.currentHeight
        }
  }, []);

  return (

	<SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Animated.View style={{ height: animatedHeaderHeight, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                <View style={{ flexDirection: 'row', padding: 10, marginHorizontal: 20, backgroundColor: '#fff', shadowOffset: { width: 0, height: 0 }, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, marginTop: Platform.OS == 'android' ? 30 : null }}>
                    <Icon name="ios-search" size={20} />
                    <TextInput
                        underlineColorAndroid = "transparent"
                        placeholder="Try new"
                        placeholderTextColor="grey"
                        style={{ flex: 1, fontWeight: '700', backgroundColor: '#fff' }} />
                </View>
                <Animated.View style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: animatedTagTop, opacity: animatedOpacity }}>
                    
                    <Box3 name="Guest"/>
                </Animated.View>
            </Animated.View>
            <ScrollView 
            scrollEventThrottle={16} 
                onScroll={Animated.event(
                    [
                        {nativeEvent: {contentOffset:{y:scrollY}}}
                    ]
                )}
            >
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20 }}>
                        Whats New
                    </Text>

                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Box1 todos={todos} />  
                            {/* <Box1 imageUri={require('../assets/images/explore_3.png')} name="Home1" />   
                            <Box1 imageUri={require('../assets/images/explore_4.png')} name="Home2" />     */}
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 30, marginHorizontal: 20 }}>
           <Text style={{ fontSize: 24, fontWeight: '700' }}>Airbnb Plus</Text>
           <Text style={{ fontWeight: '100', marginTop: 10 }}>A new selection home verified</Text>
           <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
               <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderWidth: 1, borderColor: '#ddd', borderRadius: 5 }} source={require('../assets/images/explore_4.png')} />
           </View>
        </View>
                </View>
                <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>Home around the world</Text>
                <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Box2 width={width} 
                    name="The Cozy Palace" 
                    type="PRIVATE ROOM - 2 BEDS"
                    price={82}
                    rating={4}
                    />

                    <Box2 width={width} 
                    name="The Cozy Palace" 
                    type="PRIVATE ROOM - 2 BEDS"
                    price={82}
                    rating={4}
                    />

                    <Box2 width={width} 
                    name="The Cozy Palace" 
                    type="PRIVATE ROOM - 2 BEDS"
                    price={82}
                    rating={4}
                    />

                    </View>
                </View>
            </ScrollView>
        </View>
        
    </SafeAreaView>
    )
};

export default AirView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});
 