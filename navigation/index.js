import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Browse from '../screens/Browse';
import Settings from '../screens/Settings';
import Explore from '../screens/Explore';
import Product from '../screens/Product';
import Animate from '../screens/Animate';
import Actionbutton from '../screens/Actionbutton';
import FloatingButton from '../screens/FloatingButton';
import Basicanimate from '../screens/Basicanimate';
import AirView from '../screens/AirView';
import Fashion from '../screens/Fashion';

import { theme } from '../constants';

const screens = createStackNavigator(
    {
    Welcome,
    Login,
    SignUp,
    Forgot,
    Browse,
    Settings,
    Explore,
    Product,
    Animate,
    Actionbutton,
    FloatingButton,
    Basicanimate,
    AirView,
    Fashion
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 4,
      backgroundColor: "transparent", // or 'white
      borderBottomColor: "transparent",
      elevation: 0 // for android
    },
    headerBackImage: <Image source={require("../assets/icons/back.png")} />,
    headerBackTitle: null,
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {
      alignItems: "center",
      marginLeft: theme.sizes.base * 2,
      paddingRight: theme.sizes.base
    },
    headerRightContainerStyle: {
      alignItems: "center",
      paddingRight: theme.sizes.base
    }
  }
}

);

export default createAppContainer(screens);
