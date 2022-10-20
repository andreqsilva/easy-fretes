import { StyleSheet, Text, View, Image, TextInput, Button,
    TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../assets/components/MenuAcess';
import Checkbox from 'expo-checkbox';


export default function Pendente ({navigation}) {

    return (

        <SafeAreaView style={[css.initial_cadastro_white]}>

            <View style={css.alinhamentoRow}>
                <MenuAcess navigation={navigation}/>
            </View>

            <View style={{alignItems: 'center'}}>
                
                <Text style={[css.letra3]}>Detalhes do frete</Text>
                
                <View style={[css.alinhamentoRow, {marginTop: 30}]}>
                    <Image source={require('../../assets/img/relogio.png')} style={{height: 25, width: 25}}/>

                    <Text>    Aguardando aprovação do motorista</Text>
                </View>

                <View style={[css.risquinho]}></View>
            </View>

            <View style={{marginTop: 20}}>          
                <View style={[css.box_profile, {backgroundColor: '#FFE699', opacity: 0.8}]}>
                    <View>

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>qua. 08 setembro, 08:00</Text>
                        </View>

                        <View style={[css.alinhamentoRow, {marginTop: 20}]}>
                            <View>
                                <Image source={require('../../assets/img/location_on.png')}/>
                            </View>

                            <Text>  São José dos Campos</Text>
                        </View>

                        <View style={css.alinhamentoRow}>
                            <View>
                                <Image source={require('../../assets/img/location_off.png')}/>
                            </View>

                            <Text>  São Paulo</Text>

                            <View style={css.alinhamentoRow}>
                                <Text style={{marginLeft: 90, fontSize: 17}}>R$ 297,00</Text>
                            </View>
                        </View>                      
                    </View>
                </View>    
            </View>

            <View style={css.faixa}></View>

            <View style={[css.box_profile, {backgroundColor: '#FFE699', opacity: 0.8, width: 360, marginTop: -20, height: 270}]}>

                <View style={[css.alinhamentoRow, {alignItems: 'center'}]}>
                    <Image style={{opacity: 1}} source={require('../../assets/img/profile_unknow.png')}/>
                    <Text style={[css.perfil_name, {color: 'black'}]}>   Andrezinho</Text>

                    <View style={[css.alinhamentoRow, {marginLeft: 20}]}>
                        <Image source={require('../../assets/img/estrelinha.png')} style={{height: 30, width: 30}}/>
                        <Text style={{fontSize: 20}}>   4.5</Text>
                    </View>
                </View>

                <Text style={[css.letra2, {color: 'black', alignSelf: 'center', fontWeight: 'bold', fontSize: 29}]}>Veículo</Text>

                <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 10}]}>
                    <View style={css.alinhamentoRow}>
                        <Text style={{fontWeight: '700'}}>Porte : </Text>
                        <Text>Médio</Text>  
                    </View>

                    <View style={css.alinhamentoRow}>
                        <Text style={{fontWeight: '700'}}>Tipo : </Text>
                        <Text>Fechado</Text>
                    </View>
                </View> 

                <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 10}]}>
                    <View style={css.alinhamentoRow}>
                        <Text style={{fontWeight: '700'}}>Peso máximo : </Text>
                        <Text>1254</Text>  
                    </View>

                    <View style={css.alinhamentoRow}>
                        <Text style={{fontWeight: '700'}}>Modelo : </Text>
                        <Text>Careca</Text>
                    </View>
                </View> 
            </View>

            <View style={{alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity> 
                    <Text style={{textDecorationLine: 'underline', fontSize: 18, fontWeight: '400'}}>Enviar mensagem</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', marginTop: -25}}>
                <TouchableOpacity style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00'}]}>
                    <Text style={css.letra}>Cancelar reserva</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
}
