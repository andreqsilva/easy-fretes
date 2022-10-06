import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";

export default function CadConf ({navigation}) {


    return (
        <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: 70}}>

            <Text style={{color: 'rgba(255, 108, 1, 1)', fontSize: 25, fontWeight: 'bold'}}>Confirme seu cadastro</Text>

            <View>
                <Image style={{marginBottom: 75}} source={require('../../../assets/img/check.png')}/>
            </View>

            <Text
              style={{width: '90%', textAlign: 'center', padding: 25, fontSize: 15, fontWeight: 'bold'}}>Um link de confirmação foi enviado para o e-mail cadastrado.</Text>

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
