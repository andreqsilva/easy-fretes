import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";

export default function CadConf ({navigation}) {


    return (
        <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: 70}}>

            <Text style={{color: 'rgba(255, 108, 1, 1)', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Veículo cadastrado com sucesso!</Text>

            <Text
              style={{width: '90%', textAlign: 'center', padding: 25, fontSize: 17, marginTop: 20}}>Você está pronto pra utilizar o Easy Fretes! Seu veículo foi cadastrado e as informações serão visíveis aos usuários.
            </Text>

            <View>
                <Image style={{marginBottom: 15}} source={require('../../../assets/img/HighFive.png')}/>
            </View>

            <TouchableOpacity
              onPress={()=>navigation.navigate('Entrar')}
            >
                <View style={{marginTop: 30}}>
                    <Image source={require('../../../assets/img/btnOk.png')}/>
                </View>
            </TouchableOpacity>
        </View>
      );
}
