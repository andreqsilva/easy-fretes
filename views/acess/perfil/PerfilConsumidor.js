import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { css } from '../../../assets/css/Css';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import config from '../../../config/config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import MenuAcess from '../../../assets/components/MenuAcess';


export default function PerfilConsumidor(props) {

  return (
    <View style={[css.frete_screen, {height: '18%'}]}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={{alignItems: 'flex-start', marginLeft: 70}}>
        <Image style={{marginTop: -22}} source={require('../../../assets/img/profile_unknow.png')}/>
        <Text style={[css.alinhamentoRow, {marginLeft: 110, marginTop: -50, color: 'black', fontWeight: 'bold', fontSize: 22}]}>India Golf 99</Text>
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
            <View style={css.alinhamentoRow}>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>   Telefone : </Text>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>(12) 91234-5678</Text>
            </View>

            <View style={css.alinhamentoRow}>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>   E-mail : </Text>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>teste@easyfretes.br</Text>
            </View>

            <View style={css.alinhamentoRow}>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>   Idade : </Text>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>25 anos</Text>
            </View>

            <View style={[css.alinhamentoRow, {maxWidth: '70%'}]}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>   Endereço : </Text>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Rua das ruas, 775, Bairro, Cidade, Estado</Text>
            </View>

        </View>

        

        <View style={css.risquinho} />

            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>69 mudanças feitas</Text>

        <View style={css.risquinho}></View>

      </View>
    </View>
  );
}
