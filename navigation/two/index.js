import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator, ImageBackground, TextInput } from 'react-native';
// import tabs from '../components/tabbar'

export default class Two extends Component {
    static navigationOptions = {
        title: 'two',
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
                <Text>two</Text>
            </View>


        );

    }
}
