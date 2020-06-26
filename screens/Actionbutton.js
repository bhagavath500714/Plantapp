import React from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import FloatingButton from "./FloatingButton";

const { width, height } = Dimensions.get('window');
// const renderDots = () => {
//   return (
//     <View style={{position: "absolute", alignItems: "center", bottom: 10, width : "100%", height: "100%", backgroundColor: "transparent"}}>
//       <TouchableWithoutFeedback>
//         <Animated.View style={[styles.button, styles.menu]}>
//           <AntDesign name="plus" size={24} color="#fff" />
//         </Animated.View>
//       </TouchableWithoutFeedback>
//     </View>
//   )
// }

export default () => {
 return (
    <View style={styles.container}>
      <Image source={require('../assets/images/plants_1.png')} resizeMode="cover" style={{width: 500, height: 900, opacity: 0.1}} />
      {/* {renderDots()} */}
      <FloatingButton style={{bottom: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 }
  },
  menu: {
    backgroundColor: "#F02A4B"
  }
});
