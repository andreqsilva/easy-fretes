import React, { useState, useEffect, Component } from 'react';
import { Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Search, Booking, Messages, Profile } from '../index';
import { css } from '../../assets/css/Css';
import Tab from '../../navigation/Tabs';
import MenuAcess from '../../assets/components/MenuAcess';

export default function Reserva({navigation}) {

  return (

    <View style={[css.frete_screen, {height: '18%'}]}>

        <View style={[css.alinhamentoRow, {marginTop: 28}]}>
            <MenuAcess navigation={navigation}/>
        </View>

        <View style={{alignItems: 'center'}}>
            <Image style={{marginTop: -22}} source={require('../../assets/img/profile_unknow.png')}/>
            <Text style={css.perfil_name}>Andrezinho Skywalker</Text>
        </View>
                
        <View style={{flexDirection: "column"}}>
            <View style={[css.alinhamentoRow]}>
                <View style={{marginLeft: 20}}>

                    <View style={[css.alinhamentoRow, {marginTop: 10}]}>
                        <Image style={{width: 35, height: 35}} source={require('../../assets/img/estrelinha.png')}/>
                        <Text style={{fontSize: 21, fontWeight: 'bold'}}>   4.5</Text>

                        <TouchableOpacity style={{marginStart: 28}}> 
                            <Text style={{textDecorationLine: 'underline', fontSize: 21, fontWeight: '400'}}>Ver avaliações</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            <View style={{alignItems: 'center', alignSelf: 'center', width: 330, marginTop: 20}}>
                <Text style={{fontSize: 20}}>
                    Faço fretes em toda São Paulo, 
                    do interior ao litoral paulista, além
                    de realizar em outros estados como
                    MG e RJ.
                </Text>
            </View>

            <View style={css.risquinho}></View>

            <Text style={[css.letra2, {color: 'black', alignSelf: 'center', fontWeight: 'bold', fontSize: 29}]}>Veículo</Text>

            <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 18}]}>
                <View style={css.alinhamentoRow}>
                    <Text style={{fontWeight: '700'}}>Porte : </Text>
                    <Text>Médio</Text>  
                </View>

                <View style={css.alinhamentoRow}>
                    <Text style={{fontWeight: '700'}}>Tipo : </Text>
                    <Text>Fechado</Text>
                </View>
            </View> 

            <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 18}]}>
                <View style={css.alinhamentoRow}>
                    <Text style={{fontWeight: '700'}}>Peso máximo : </Text>
                    <Text>1254</Text>  
                </View>

                <View style={css.alinhamentoRow}>
                    <Text style={{fontWeight: '700'}}>Modelo : </Text>
                    <Text>Careca</Text>
                </View>
            </View> 

            <View style={css.risquinho}></View>

            <View style={[{alignItems: 'center', marginTop: 10}]}>
                <View style={css.alinhamentoRow}>
                    <Text style={{fontWeight: 'bold', fontSize: 19}}>Valor : </Text>
                    <Text style={{fontSize: 19}}>R$ 2424,69</Text>
                </View>
            </View>

            <View style={{alignItems: 'center', marginTop: 35}}>
                <TouchableOpacity> 
                    <Text style={{textDecorationLine: 'underline', fontSize: 18, fontWeight: '400'}}>Enviar mensagem</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', marginTop: -10}}>
                <TouchableOpacity style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00'}]}>
                    <Text style={css.letra}>Reservar</Text>
                </TouchableOpacity>
            </View>

        </View>    

        {<View style={{marginTop: 27}}>
            <Tab />
        </View> }

    </View>


  );
}
