

import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import Home from './navigation/home';
import login from './navigation/login'
import Settings from './navigation/settings';
import One from './navigation/one';
import Two from './navigation/two';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// const width = Dimensions.get('window');
const custumComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 120, width: 120, borderRadius: 60, margin: 10, opacity: 13, alignSelf: 'center', elevation: 4 }}>
      <Image source={require('./navigation/images/std.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>
      <DrawerItems  {...props} />
    </ScrollView>
  </SafeAreaView>

)
const Tabs = createBottomTabNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} style={{ marginTop: 10 }} />
      )
    },
  },
  one: {
    screen: One,
    navigationOptions: {
      tabBarLabel: "One",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user-circle" size={20} color={tintColor} style={{ marginTop: 10 }} />
      )
    },
  },

},

  {
    order: ['home', 'one'],
    tabBarOptions: {
      activeTintColor: '#ff471a',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: "bold",
        margin: 5
      },
      style: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
        borderTopColor: 'lightgray',
        borderTopWidth: 2,
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      }

    },

  },
)
const mainDrawNavigator = createStackNavigator({
  dashBoardTabs: {
    screen: Tabs,

    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Icon
          name="bars" size={30}
          style={{
            color: "#ff471a",
            marginLeft: 20
          }}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerRight: (
        <Icon
          name="paper-plane-o" size={30}
          style={{
            color: "#ff471a",
            marginRight: 20
          }}
          onPress={() => navigation.navigate('settings')}
        />
      )
    }),

  },
  settings: Settings,
  two: Two
},
  {
    headerLayoutPreset: 'center'
  }
)

const DashboardDrawerNavigator = createDrawerNavigator({
  dashBoard: {
    screen: mainDrawNavigator,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="user-circle" size={20} color={tintColor} style={{}} />
      )
    },
  },
  two: {
    screen: Two,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} />
      )
    }
  },
  one: {
    screen: One,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="circle" size={20} color={tintColor} />
      )
    }
  },

}, {
    initialRouteName: 'dashBoard',
    contentComponent: custumComponent,
    // drawerWidth: width
  })


const AppSwitchNavigator = createSwitchNavigator({
  login: login,
  dashBoard: DashboardDrawerNavigator,
})

const App = createAppContainer(AppSwitchNavigator);
export default App