import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Search, Booking, Messages, Profile, Checkout } from '../views/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Tabs() {
  return (

    <Tab.Navigator
      activeColor='#333'
      screenOptions={{
        tabBarActiveBackgroundColor: '#ffb449',
        //tabBarInactiveBackgroundColor: '#FFC56F',
        //tabBarActiveBorderRadius: 20,
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
          backgroundColor: '#FFC56F',
          //borderTopRightRadius: 10,//add border top right radius
          //borderTopLeftRadius: 10,//add border top left radius
          //borderRadius: 15,
          height: 60,
          //...styles.shadow
        }
      }}
    >

      <Tab.Screen name="Search" component={Search} options={{
        headerShown: false,
        tabBatLabel: 'Procurar',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='calendar-search' size={25} style={{
              color: focused ? 'black' : 'grey'
            }}/>
            <Text style={{color: focused ? 'black' : 'grey'}}>
              Procurar
            </Text>
          </View>

        )
      }}/>
      <Tab.Screen name="Booking" component={Booking} options={{
        headerShown: false,
        tabBarLabel: 'Seus Fretes',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='truck-fast-outline' size={25} style={{
              color: focused ? 'black' : 'gray'
            }}/>
            <Text style={{color: focused ? 'black' : 'grey'}}>
              Seus Fretes
            </Text>
          </View>
        )
      }}
      />
      <Tab.Screen name="Messages" component={Messages} options={{
        headerShown: false,
        tabBarLabel: 'Mensagens',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='message-processing-outline' size={25} style={{
              color: focused ? 'black' : 'grey'
            }}/>
            <Text style={{color: focused ? 'black' : 'grey'}}>
              Mensagens
            </Text>
          </View>
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarLabel: 'Perfil',
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='account-outline' size={25} style={{
              color: focused ? 'black' : 'grey'
            }}/>
            <Text style={{color: focused ? 'black' : 'grey'}}>
              Perfil
            </Text>
          </View>
        )
      }}
      />

    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});
