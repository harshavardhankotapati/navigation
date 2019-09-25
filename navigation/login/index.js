import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator, ImageBackground, TextInput, Button } from 'react-native';
import styles from './styles'

export default class Login extends Component {
    // static navigationOptions = { header: null }

    render() {
        return (

            <View style={styles.main} >
                <TextInput
                    style={styles.education}
                    placeholder="user name "
                    placeholderTextColor={"white"}
                    onChangeText={(text) => this.setState({ email: text })}
                />

                <TextInput
                    style={styles.education}
                    placeholder="pasword "
                    secureTextEntry={true}
                    textShadowColor='white'
                    placeholderTextColor={"white"}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <View >
                    <TouchableOpacity style={styles.loginTuch} onPress={() => { this.props.navigation.navigate('home') }}>
                        <Text style={styles.mainTuch}>Login </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
