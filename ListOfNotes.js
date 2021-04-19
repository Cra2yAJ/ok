import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class ListOfNotes extends Component{
render(){
    return(
        <View>
            <Text>List of All notes</Text>
            </View>
    )

}
}