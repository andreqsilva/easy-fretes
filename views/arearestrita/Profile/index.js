import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import { css } from '../../../assets/css/Css';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YourProfile from './YourProfile';
import Settings from './Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

export default function Profile({navigation}) {

  const [userData, setUserData] = useState('none');

  useEffect(()=> {
    verifyUserData();
  },[]);

  async function verifyUserData() {
    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    if (json !== null) {
      setUserData(json);
    }
  }

  return (
    <View style={[css.container]}>

    <View style={{alignItems: 'flex-start', backgroundColor: '#FFA666', height: '20%'}}>
      <View style={{marginTop: 20, marginLeft: 40}}>
      <Text style={[css.alinhamentoRow, {marginLeft: 70, top: 50,color: 'black', fontWeight: 'bold', fontSize: 22}]}>{userData.nome}</Text>
        <Image source={require('../../../assets/img/profile_unknow.png')}/>
        {// <TouchableOpacity>
        //     <Image style={{marginTop: -55, marginLeft: 60}} source={require('../../../assets/img/addPhoto.png')}/>
        // </TouchableOpacity>
        }
      </View>
    </View>

      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarItemStyle: {
            borderRadius: 10,
          },
          tabBarStyle: {
            elevation: 0,
            backgroundColor: 'white'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#FFA666',
            //height: 1
          },
        }}
      >
        <Tab.Screen name="YourProfile" component={YourProfile}
          options={{
            headerShown: false,
            tabBarLabel: 'Seu Perfil',
            tabBarIcon: ({focused}) => (
              <View style={{right: 20, width: 90, justifyContent: 'center'}}>
                <Text style={{color: focused ? '#FFA666' : 'grey', fontSize: 18, fontWeight: 'bold'}}>Seu Perfil</Text>
              </View>
            )
          }}/>

          <Tab.Screen name="Settings" component={Settings}
            options={{
              headerShown: false,
              tabBarLabel: 'Configurações',
              tabBarIcon: ({focused}) => (
                <View style={{right: 40, width: 120,  justifyContent: 'center'}}>
                  <Text style={{color: focused ? '#ff8c00' : 'grey', fontSize: 18, fontWeight: 'bold'}}>Configurações</Text>
                </View>
              )
          }}/>
      </Tab.Navigator>
    </View>
  );
}
