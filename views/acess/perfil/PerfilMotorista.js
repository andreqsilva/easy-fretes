import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { css } from '../../../assets/css/Css';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import config from '../../../config/config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import MenuAcess from '../../../assets/components/MenuAcess';


export default function PerfilMotorista(props) {

  return (
    <View style={[css.frete_screen, {height: '18%'}]}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={{alignItems: 'flex-start', marginLeft: 70}}>
        <Image style={{marginTop: -22}} source={require('../../../assets/img/profile_unknow.png')}/>
        <Text style={[css.alinhamentoRow, {marginLeft: 110, marginTop: -50, color: 'black', fontWeight: 'bold', fontSize: 22}]}>MC Andrézikaaa</Text>
        <TouchableOpacity>
            <Image style={{marginTop: -15, marginLeft: 60}} source={require('../../../assets/img/addPhoto.png')}/>
        </TouchableOpacity>
        
      </View>

      <View style={{flexDirection: "column"}}>
        
        <View style={[css.alinhamentoRow]}>
          <View style={{marginLeft: 20, marginTop: 10}}>
            <View style={[css.alinhamentoRow, {marginTop: 10}]}>
                <TouchableOpacity style={{marginStart: 30}}>
                    <Text style={{fontSize: 21, fontWeight: '400', backgroundColor: 'silver', opacity: 0.8, borderRadius: 15, padding: 9}}>Seu perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginStart: 50}}>
                    <Text style={{fontSize: 21, fontWeight: '400', backgroundColor: 'silver', opacity: 0.8, borderRadius: 15, padding: 9}}>Configurações</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Sobre você</Text>
        </View>

        <View style={{alignItems: 'center', alignSelf: 'center', width: 330, marginTop: 20}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Faço fretes em toda São Paulo, {'\n'}
            do interior ao litoral paulista, além {'\n'}
            de realizar em outros estados como {'\n'}
            MG e RJ.
          </Text>
        </View>

        <View style={css.risquinho} />

            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>69 mudanças feitas</Text>

        <View style={css.risquinho}></View>

       <View style={[css.alinhamentoRow, {marginTop: 20}]}>
            <Text style={{fontSize: 20, marginLeft: 70}}>Sua carteira</Text>

            <TouchableOpacity>
                <Image style={{marginLeft: 145, height: 35}} source={require('../../../assets/img/expand.png')}/>
            </TouchableOpacity>
       </View>

       <View style={[css.alinhamentoRow, {marginTop: 30}]}>
            <Text style={{fontSize: 20, marginLeft: 70}}>Seus veículos</Text>

            <TouchableOpacity>
                <Image style={{marginLeft: 130, height: 35}} source={require('../../../assets/img/expand.png')}/>
            </TouchableOpacity>
       </View>

       <View style={[css.alinhamentoRow, {marginTop: 30}]}>
            <Text style={{fontSize: 20, marginLeft: 70}}>Cadastrar veículo</Text>

            <TouchableOpacity>
                <Image style={{marginLeft: 100, height: 35}} source={require('../../../assets/img/circle_plus.png')}/>
            </TouchableOpacity>
       </View>

      </View>
    </View>
  );
}
