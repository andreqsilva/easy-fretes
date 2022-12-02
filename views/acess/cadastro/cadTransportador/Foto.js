import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Foto (props) {


    return (
        <SafeAreaView style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>

            <View style={css.back_menu}>
                <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' size={32} color='black' />
                </TouchableOpacity>
            </View>

            <Text style={[css.msg_selfie, {marginTop: 40}]}>Posicione bem seu rosto com o documento</Text>

            <Text style={[css.msg_selfie, {marginTop: 15}]}>Certifique-se que esteja bem iluminado</Text>

            <Text style={[css.msg_selfie, {marginTop: 15}]}>Deixe a foto bem focada</Text>

            <Text style={[css.msg_selfie, {marginTop: 40}]}>Tire sua selfie!</Text>

            <View>
                <Image style={{marginBottom: 75, marginTop: 80}} source={require('../../../../assets/img/docFace.png')}/>
            </View>

            <TouchableOpacity>
                <View style={{marginTop: 60}}>
                    <Image source={require('../../../../assets/img/btnNext.png')}/>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
      );
}
