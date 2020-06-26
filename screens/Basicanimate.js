import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Animated, Easing, Dimensions
} from 'react-native';

const { width, height } = Dimensions.get("window");

export default class Basicanimate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0),
            xValue: new Animated.Value(0),
            springValue: new Animated. Value(0.3),
        }
    }

    _fadeAnimation = () => {
       // alert("fade!");
       Animated.timing(this.state.fadeValue, {
           toValue: 1,
           duration: 1000,  // 1000 miliseconds = 1 second
       }).start();
    }

    _moveAnimation = () => {
        Animated.timing(this.state.xValue, {
          toValue: width - 100,
          duration: 1000,
          // easing: Easing.linear,  
          // easing: Easing.back,
        // }).start();
        }).start(() => {
            //call after finish this animation !
            Animated.timing(this.state.xValue, {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear,
                // delay: 1000,//run after 1 seconds
            //}).start();
            }).start(() => {
                this._moveAnimation();
            });
        });
    }

    _springAnimation = () => {
        Animated.spring(this.state.springValue, {
            toValue: 1,
            friction: 1
        }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.animationView,
                    // {opacity: this.state.fadeValue}
                   //  { left: this.state.xValue }
                   { transform: [{ scale: this.state.springValue }], alignSelf: 'center' }
                     ]}>

                </Animated.View>
                <TouchableOpacity style={styles.button}
                    onPress={this._springAnimation}
                >
                    <Text style={styles.buttonText}>Animate</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    animationView: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    button: {
        backgroundColor: "steelblue",
        height: 45,
        marginTop: 20,
        alignSelf: "center"
    },
    buttonText: {
        color: 'white',
        padding: 12,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 18
    }
});
 