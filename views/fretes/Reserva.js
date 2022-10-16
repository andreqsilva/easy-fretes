import React, { useState, useEffect, Component } from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Search, Booking, Messages, Profile } from '../index';
import { css } from '../../assets/css/Css';
import Tab from '../../navigation/Tabs';
import MenuAcess from '../../assets/components/MenuAcess';

export default function Reserva({navigation}) {

  return (

    <View style={css.frete_screen}>

        <View style={[css.alinhamentoRow, {marginTop: 50}]}>
            <MenuAcess navigation={navigation}/>
        </View>
                
        <View style={[css.box_profile, {marginTop: 20}]}>
            <View style={[css.alinhamentoRow]}>
                
                <View style={{backgroundColor: 'pink'}}>
                    <Image style={{marginTop: 10}} source={require('../../assets/img/profile_unknow.png')}/>
                </View>

                <View style={{marginLeft: 20}}>
                    <Text style={{color: 'black', backgroundColor: 'pink', width: 130, fontSize: 20}}>Name</Text>

                    <View style={[css.alinhamentoRow, {marginTop: 5}]}>
                        <Image source={require('../../assets/img/estrelinha.png')}/>
                        <Text>   4.5</Text>
                    </View>
                </View>

                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 20}}>R$ 2500</Text>
                </View>
            </View>
        </View>    

        {/* <View style={{marginTop: 315}}>
            <Tab />
        </View> */}

    </View>


  );
}
