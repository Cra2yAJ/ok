import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddNotes from '../screens/AddNotes';
import ListOfNotes from '../screens/ListOfNotes';



export const AppTabNavigator = createBottomTabNavigator({
 AN : {
    screen: AddNotes,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add Notes",
    }
  },
  LON: {
    screen: ListOfNotes,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "List of All notes",
    }
  }
});