import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Search, Booking, Messages, Profile, Checkout } from '../views/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Tabs() {
  return (

    <Tab.Navigator
      initialRouteName='Search'
      activeColor='#333'
      screenOptions={{
        //tabBarActiveBackgroundColor: '#ffb449',
        //tabBarInactiveBackgroundColor: '#FFC56F',
        //tabBarActiveBorderRadius: 20,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          borderRadius: 10,
        },
        tabBarStyle: {
          //position: 'absolute',
          //bottom: 25,
          //left: 20,
          //right: 20,
          elevation: 0,
          backgroundColor: 'white',
          //borderTopRightRadius: 10,//add border top right radius
          //borderTopLeftRadius: 10,//add border top left radius
          //borderRadius: 15,
          height: 60,
          //...styles.shadow
        }
      }}
    >

      <Tab.Screen name="Booking" component={Booking} options={{
        headerShown: false,
        tabBarLabel: 'Seus Fretes',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Ionicons name={focused ? 'ios-calendar' : 'ios-calendar-outline'} size={25} style={{
              color: focused ? '#ff8c00' : 'grey'
            }}/>

          </View>
        )
      }}
      />

      <Tab.Screen name="Search" component={Search} options={{
        headerShown: false,
        tabBatLabel: 'Procurar',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={focused ? 'truck' : 'truck-outline'} size={25} style={{
              color: focused ? '#ff8c00' : 'grey'
            }}/>
          </View>
        )
      }}/>

      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarLabel: 'Perfil',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={focused ? 'account' : 'account-outline'} size={25} style={{
              color: focused ? '#ff8c00' : 'grey'
            }}/>
          </View>
        )
      }}
      />


      {/*<Tab.Screen name="Messages" component={Messages} options={{
        headerShown: false,
        tabBarLabel: 'Mensagens',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={focused ? 'message-processing' : 'message-processing-outline'} size={25} style={{
              color: focused ? '#ff8c00' : 'grey'
            }}/>

          </View>
        )
      }}
      />*/}

    </Tab.Navigator>

  );
}
