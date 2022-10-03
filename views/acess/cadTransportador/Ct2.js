import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Ct2 (props){
    
    return(

        <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

            <View style={css.back_menu}>
                <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' size={32} color='black' />
                </TouchableOpacity>
            </View>
            
            <View style={{width: 350, marginTop: 30}}>
                <Text style={[css.letra2, {fontSize: 20, fontWeight: '600'}]}>Agora precisaremos que nos envie alguns documentos.</Text>

                <Text style={[css.letra2, {fontSize: 21, fontWeight: '700'}]}>  Essa parte é muito importante !</Text>
            </View>

            <View style={[css.alinhamentoRow, css.anexdoc_Ct2]}>

                {/* <TouchableOpacity><Text style={{fontSize: 17}}>Anexar documento CNH</Text></TouchableOpacity>
                <Image style={[css.icon, {marginLeft: 70}]}source={require('../../../assets/img/expand.png')} /> */}

                <Text style={{fontSize: 17}}>Anexar documento CNH</Text>
                <TouchableOpacity>
                <Image style={[css.icon, {marginLeft: 80}]}source={require('../../../assets/img/expand.png')}/>
                </TouchableOpacity>

            </View>

            <View style={[css.alinhamentoRow, css.anexdoc_Ct2, {marginTop: 20}]}>

                <Text style={{fontSize: 17}}>Anexe uma selfie com sua CNH</Text>
                <TouchableOpacity>
                <Image style={[css.icon, {marginLeft: 25}]}source={require('../../../assets/img/expand.png')}/>
                </TouchableOpacity>
                
            </View>

            <KeyboardAvoidingView>
                <TouchableOpacity onPress={() => props.navigation.navigate('Ct2')}>  
                        <Image source={require('../../../assets/img/btnNext.png')}/>  
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}