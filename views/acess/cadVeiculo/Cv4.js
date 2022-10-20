import { StyleSheet, Text, View, Image, TextInput, Button,
    TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../../assets/components/MenuAcess';
import Checkbox from 'expo-checkbox';


export default function Cv1 ({navigation}) {
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);

return (

    <SafeAreaView style={[css.initial_cadastro_white]}>

        <View style={css.alinhamentoRow}>
            <MenuAcess navigation={navigation}/>
        </View>

        <View style={[css.container_direction, {marginTop: 40}]}>
            <Text style={[css.letra, css.text_veiculos, {width: 330, marginStart: 70}]}>Qual a placa do veículo?</Text>

                
            <View style={[css.login_form, {marginTop: 40, height: '80%'}]}>
                
                <TextInput
                    placeholder='RIO2A18 / JJK-1960'
                    placeholderTextColor='black'
                    style={[css.box_input_placa, {width: 270}]}/>
                
            </View>
            
        </View>
        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1, justifyContent:'flex-end'}}
        >

            <TouchableOpacity
                style={{bottom:70}}
                onPress={()=>Cv5()}> 
                <KeyboardAvoidingView>
                <Image source={require('../../../assets/img/btnNext.png')}/>
                </KeyboardAvoidingView>
            </TouchableOpacity>

        </KeyboardAvoidingView>

    </SafeAreaView>

    );
}
