import React, { useState, useEffect, Component } from 'react';
import { Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Search, Booking, Messages, Profile } from '../index';
import { css } from '../../assets/css/Css';
import Tab from '../../navigation/Tabs';
import MenuAcess from '../../assets/components/MenuAcess';

export default function Reserva({navigation}) {

  return (

    <View style={{flex: 1}}>

        <View style={[css.alinhamentoRow, {marginTop: 40}]}>
            <MenuAcess navigation={navigation}/>
        </View>

        <View style={[css.alinhamentoRow]}>

            <View style={{marginLeft: 50}}>
                <Text style={[css.text_veiculos, css.fretes_text]}>Seus Fretes</Text>
            </View>

            <View style={{marginHorizontal: -40}}>
                <Image source={require('../../assets/img/truck-icon.png')}/>
            </View>
        </View>
        

        <View style={css.seus_fretes}>          
            <View style={[css.box_profile, {marginTop: 30}]}>
                <View>
                    
                    <View style={[css.alinhamentoRow]}>
                        <View style={{backgroundColor: 'pink', height: 40}}>
                            <Image style={{width: 40, height: 40}} source={require('../../assets/img/profile_unknow.png')}/>
                        </View>

                        <View style={{marginLeft: 15}}>
                            <Text style={{color: 'black', backgroundColor: 'pink', width: 110, fontSize: 20}}>Name</Text>

                            {/* <View style={[css.alinhamentoRow, {marginTop: 5}]}>
                                <Image source={require('../../assets/img/estrelinha.png')}/>
                                <Text>   4.5</Text>
                            </View> */}
                        </View>

                        <View style={{marginLeft: 20}}>
                            <Text style={{fontSize: 13}}>qua. 08 setembro, 08:00</Text>
                        </View>
                    </View>

                    <View style={css.alinhamentoRow}>
                        <View>
                            <Image source={require('../../assets/img/location_on.png')}/>
                        </View>

                        <Text>  São José dos Campos</Text>

                        <Text style={{marginLeft: 100, fontWeight: 'bold'}}> 36 km</Text>
                    </View>

                    <View style={css.alinhamentoRow}>
                        <View>
                            <Image source={require('../../assets/img/location_off.png')}/>
                        </View>

                        <Text>  São Paulo</Text>
                    </View>

                    <View style={css.alinhamentoRow}>
                        <View>
                            <Image source={require('../../assets/img/check_circle.png')}/>
                        </View>

                        <Text>  Reserva aprovada</Text>

                        <Text style={{marginLeft: 100, fontSize: 20, fontWeight: 'bold'}}>R$ 297,00</Text>
                    </View>

                </View>

            </View>    
        </View>

        <View style={{marginTop: 435, flex: 1}}>
            <Tab />
        </View>
        
    </View>

  );
}
