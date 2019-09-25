import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator, ImageBackground, TextInput } from 'react-native';
import styles from './styles';
// import tabs from '../components/tabbar'

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#ff471a',
        },
        headerTitleStyle: {
            fontSize: 18,
        },
    };

    render() {
        return (
            <View>
                <Text>Home</Text>
                {/* <Tabs /> */}
            </View>


        );

    }
}
