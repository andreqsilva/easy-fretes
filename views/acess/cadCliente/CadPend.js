import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";

export default function CadPend (props) {

    return (
        <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: 70}}>
            
            <Text style={{color: 'rgba(255, 108, 1, 1)', fontSize: 25, fontWeight: 'bold'}}>Cadastro pendente</Text>

            <View>
                <Image style={{marginBottom: 25}} source={require('../../../assets/img/yesOrNo.png')}/>
            </View>  

            <Text style={{width: '90%', textAlign: 'center', padding: 5, fontSize: 15, fontWeight: 'bold'}}>A validação do seu cadastro está pendente.</Text>

            <Text style={{width: '90%', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>Assim que nossa equipe verificar os dados informados você será notificado por e-mail.</Text>

            <TouchableOpacity>
                <View style={{marginTop: 20}}>
                    <Image source={require('../../../assets/img/btnOk.png')}/>
                </View>
            </TouchableOpacity>
        </View>
      );
}  